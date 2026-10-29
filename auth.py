"""
Authentication and security module for Stratum Sales Intelligence Platform.
Implements bcrypt password hashing, SQLite session management, rate-limiting,
and FastAPI authorization dependencies.
"""
import os
import sqlite3
import secrets
import time
from typing import Optional, Dict, Any, List, Tuple
import bcrypt
from fastapi import HTTPException, Security, Request, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr

DB_PATH = os.path.join(os.path.dirname(__file__), "stratum_auth.db")
MAX_FAILED_ATTEMPTS = 5
LOCKOUT_DURATION_SECONDS = 900  # 15 minutes lockout
SESSION_DURATION_SECONDS = 86400  # 24 hours

bearer_scheme = HTTPBearer(auto_error=False)

def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_auth_db():
    """Initializes tables for administrator credentials, sessions, and security audit logs."""
    conn = get_db_connection()
    with conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS admin_users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL,
                created_at REAL NOT NULL,
                updated_at REAL NOT NULL
            );
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS active_sessions (
                token TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                created_at REAL NOT NULL,
                expires_at REAL NOT NULL,
                ip_address TEXT,
                user_agent TEXT
            );
        """)
        conn.execute("""
            CREATE TABLE IF NOT EXISTS login_audit_log (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp REAL NOT NULL,
                username TEXT NOT NULL,
                ip_address TEXT,
                success INTEGER NOT NULL,
                failure_reason TEXT
            );
        """)
    conn.close()

def hash_password(plain_password: str) -> str:
    """Hashes a password securely using bcrypt with auto-generated salt."""
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(plain_password.encode("utf-8"), salt).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies a plain-text password against a bcrypt hash."""
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception:
        return False

def seed_initial_admin(
    username: str = "admin",
    password: str = "AdminSecure2026!",
    email: str = "admin@stratum.local"
) -> bool:
    """Seeds the initial administrator account if no admin exists."""
    init_auth_db()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM admin_users LIMIT 1")
    existing = cursor.fetchone()
    if existing:
        conn.close()
        return False

    pw_hash = hash_password(password)
    now = time.time()
    with conn:
        conn.execute(
            "INSERT INTO admin_users (username, email, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
            (username.lower().strip(), email.lower().strip(), pw_hash, now, now)
        )
    conn.close()
    return True

def check_rate_limit(ip_address: str, username: str) -> Tuple[bool, int]:
    """
    Checks if consecutive failed attempts exceed MAX_FAILED_ATTEMPTS in the last LOCKOUT_DURATION_SECONDS.
    Returns (is_locked, remaining_seconds).
    """
    conn = get_db_connection()
    now = time.time()
    cutoff = now - LOCKOUT_DURATION_SECONDS
    cursor = conn.cursor()
    cursor.execute("""
        SELECT timestamp FROM login_audit_log 
        WHERE (ip_address = ? OR username = ?) AND success = 0 AND timestamp > ?
        ORDER BY timestamp DESC
    """, (ip_address, username.lower().strip(), cutoff))
    failures = cursor.fetchall()
    conn.close()

    if len(failures) >= MAX_FAILED_ATTEMPTS:
        oldest_relevant = failures[MAX_FAILED_ATTEMPTS - 1]["timestamp"]
        remaining = int(LOCKOUT_DURATION_SECONDS - (now - oldest_relevant))
        if remaining > 0:
            return True, remaining
    return False, 0

def log_auth_event(username: str, ip_address: str, success: bool, failure_reason: Optional[str] = None):
    conn = get_db_connection()
    with conn:
        conn.execute(
            "INSERT INTO login_audit_log (timestamp, username, ip_address, success, failure_reason) VALUES (?, ?, ?, ?, ?)",
            (time.time(), username.lower().strip(), ip_address, 1 if success else 0, failure_reason)
        )
    conn.close()

def authenticate_admin(username_or_email: str, password: str, ip_address: str, user_agent: str) -> str:
    """
    Verifies credentials, applies brute-force protection, creates a secure session token.
    Raises HTTPException on failure.
    """
    clean_id = username_or_email.lower().strip()
    is_locked, remaining = check_rate_limit(ip_address, clean_id)
    if is_locked:
        log_auth_event(clean_id, ip_address, False, "Rate limit lockout active")
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail=f"Too many failed login attempts. Temporarily locked out for security. Try again in {remaining} seconds."
        )

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT id, username, password_hash FROM admin_users WHERE username = ? OR email = ?",
        (clean_id, clean_id)
    )
    user = cursor.fetchone()

    if not user or not verify_password(password, user["password_hash"]):
        conn.close()
        log_auth_event(clean_id, ip_address, False, "Invalid credentials")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username/email or password."
        )

    # Valid credentials -> Create secure session token
    token = secrets.token_hex(32)
    now = time.time()
    expires_at = now + SESSION_DURATION_SECONDS

    with conn:
        conn.execute(
            "INSERT INTO active_sessions (token, username, created_at, expires_at, ip_address, user_agent) VALUES (?, ?, ?, ?, ?, ?)",
            (token, user["username"], now, expires_at, ip_address, user_agent[:250])
        )
    conn.close()

    log_auth_event(user["username"], ip_address, True, None)
    return token

def terminate_session(token: str) -> bool:
    """Invalidates an active session token."""
    conn = get_db_connection()
    with conn:
        cursor = conn.execute("DELETE FROM active_sessions WHERE token = ?", (token,))
        deleted = cursor.rowcount > 0
    conn.close()
    return deleted

def get_current_admin(
    request: Request,
    auth_header: Optional[HTTPAuthorizationCredentials] = Security(bearer_scheme)
) -> Dict[str, Any]:
    """
    FastAPI dependency that validates session authentication.
    Checks Bearer token in Authorization header, then falls back to session cookie.
    """
    token = None
    if auth_header and auth_header.credentials:
        token = auth_header.credentials
    elif "stratum_session" in request.cookies:
        token = request.cookies.get("stratum_session")
    elif "nexus_session" in request.cookies:
        token = request.cookies.get("nexus_session")

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required. Please log in as administrator to access this resource.",
            headers={"WWW-Authenticate": "Bearer"}
        )

    conn = get_db_connection()
    now = time.time()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT s.token, s.username, s.created_at, s.expires_at, u.email
        FROM active_sessions s
        JOIN admin_users u ON s.username = u.username
        WHERE s.token = ? AND s.expires_at > ?
    """, (token, now))
    session = cursor.fetchone()
    conn.close()

    if not session:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session expired or invalid. Please log in again.",
            headers={"WWW-Authenticate": "Bearer"}
        )

    return {
        "username": session["username"],
        "email": session["email"],
        "token": session["token"],
        "created_at": session["created_at"],
        "expires_at": session["expires_at"]
    }

def get_current_admin_optional(
    request: Request,
    auth_header: Optional[HTTPAuthorizationCredentials] = Security(bearer_scheme)
) -> Optional[Dict[str, Any]]:
    """
    Optional authentication dependency: returns admin info if valid token/cookie provided,
    otherwise returns None without raising an HTTP 401 error.
    """
    try:
        return get_current_admin(request, auth_header)
    except HTTPException:
        return None

def get_security_audit_logs(limit: int = 25) -> List[Dict[str, Any]]:
    """Returns recent security authentication events for administrator review."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        SELECT timestamp, username, ip_address, success, failure_reason
        FROM login_audit_log
        ORDER BY timestamp DESC
        LIMIT ?
    """, (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def update_admin_password(username: str, old_password: str, new_password: str) -> bool:
    """Updates the administrator's password after verifying the old password."""
    if len(new_password) < 8:
        raise HTTPException(status_code=400, detail="New password must be at least 8 characters long.")

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT password_hash FROM admin_users WHERE username = ?", (username,))
    user = cursor.fetchone()

    if not user or not verify_password(old_password, user["password_hash"]):
        conn.close()
        raise HTTPException(status_code=400, detail="Current password verification failed.")

    new_hash = hash_password(new_password)
    now = time.time()
    with conn:
        conn.execute(
            "UPDATE admin_users SET password_hash = ?, updated_at = ? WHERE username = ?",
            (new_hash, now, username)
        )
    conn.close()
    return True
