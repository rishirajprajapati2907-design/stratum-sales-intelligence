"""
CLI utility to seed or reset administrator credentials.
Usage:
  python -m backend.seed_admin --username admin --password MyStrongPassword2026! --email admin@company.com
"""
import sys
import argparse
import sqlite3
import time
from backend.auth import init_auth_db, hash_password, get_db_connection

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def seed_or_reset(username: str, password: str, email: str):
    init_auth_db()
    conn = get_db_connection()
    now = time.time()
    clean_user = username.lower().strip()
    clean_email = email.lower().strip()
    pw_hash = hash_password(password)

    with conn:
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM admin_users WHERE username = ?", (clean_user,))
        existing = cursor.fetchone()
        if existing:
            conn.execute(
                "UPDATE admin_users SET email = ?, password_hash = ?, updated_at = ? WHERE username = ?",
                (clean_email, pw_hash, now, clean_user)
            )
            print(f"[SUCCESS] Administrator '{clean_user}' password updated successfully.")
        else:
            conn.execute(
                "INSERT INTO admin_users (username, email, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
                (clean_user, clean_email, pw_hash, now, now)
            )
            print(f"[SUCCESS] Administrator '{clean_user}' created successfully.")
    conn.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Configure Stratum Administrator Credentials")
    parser.add_argument("--username", default="admin", help="Administrator username")
    parser.add_argument("--password", default="AdminSecure2026!", help="Administrator password")
    parser.add_argument("--email", default="admin@stratum.local", help="Administrator email")
    args = parser.parse_args()

    seed_or_reset(args.username, args.password, args.email)
