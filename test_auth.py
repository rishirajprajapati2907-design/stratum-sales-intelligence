"""
Comprehensive tests for Administrator Authentication, Brute-force Protection,
Session Lifecycle, and Endpoint Authorization.
"""
import pytest
from backend.auth import (
    hash_password,
    verify_password,
    authenticate_admin,
    terminate_session,
    seed_initial_admin,
    check_rate_limit,
    log_auth_event
)

def test_password_hashing():
    pw = "SuperSecurePassword123!"
    pw_hash = hash_password(pw)
    assert pw_hash != pw
    assert verify_password(pw, pw_hash) is True
    assert verify_password("WrongPassword!", pw_hash) is False

def test_admin_login_success(client):
    res = client.post("/api/auth/login", json={
        "username": "admin",
        "password": "AdminSecure2026!"
    })
    assert res.status_code == 200
    data = res.json()
    assert "token" in data
    assert data["username"] == "admin"
    assert "stratum_session" in res.cookies

def test_admin_login_failure(client):
    res = client.post("/api/auth/login", json={
        "username": "admin",
        "password": "IncorrectPassword"
    })
    assert res.status_code == 401
    assert "Invalid username" in res.json()["detail"]

def test_protected_route_unauthorized(client):
    # Upload requires admin token
    res = client.post("/api/upload")
    assert res.status_code == 401
    assert "Authentication required" in res.json()["detail"]

def test_protected_route_authorized(client, sample_csv_bytes):
    # Login first
    login_res = client.post("/api/auth/login", json={
        "username": "admin",
        "password": "AdminSecure2026!"
    })
    token = login_res.json()["token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Access /api/auth/me
    me_res = client.get("/api/auth/me", headers=headers)
    assert me_res.status_code == 200
    assert me_res.json()["username"] == "admin"

    # Access /api/datasets
    ds_res = client.get("/api/datasets", headers=headers)
    assert ds_res.status_code == 200
    assert isinstance(ds_res.json(), list)

def test_logout_lifecycle(client):
    login_res = client.post("/api/auth/login", json={
        "username": "admin",
        "password": "AdminSecure2026!"
    })
    token = login_res.json()["token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Verify active
    res1 = client.get("/api/auth/me", headers=headers)
    assert res1.status_code == 200

    # Logout
    logout_res = client.post("/api/auth/logout", headers=headers)
    assert logout_res.status_code == 200

    # Verify terminated
    res2 = client.get("/api/auth/me", headers=headers)
    assert res2.status_code == 401

def test_brute_force_lockout():
    test_user = "brute_force_target"
    test_ip = "192.168.1.99"

    # Log 5 consecutive failures
    for _ in range(5):
        log_auth_event(test_user, test_ip, False, "test failed attempt")

    is_locked, remaining = check_rate_limit(test_ip, test_user)
    assert is_locked is True
    assert remaining > 0
