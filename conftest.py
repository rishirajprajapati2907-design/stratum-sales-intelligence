"""
Pytest fixtures and test setup.
"""
import pytest
import io
import pandas as pd
from fastapi.testclient import TestClient
from backend.main import app
import time
from backend.auth import init_auth_db, get_db_connection, hash_password

@pytest.fixture(autouse=True)
def ensure_admin():
    init_auth_db()
    conn = get_db_connection()
    with conn:
        conn.execute("DELETE FROM login_audit_log")
        pw_hash = hash_password("AdminSecure2026!")
        cursor = conn.cursor()
        cursor.execute("SELECT id FROM admin_users WHERE username = 'admin'")
        if cursor.fetchone():
            conn.execute(
                "UPDATE admin_users SET password_hash = ?, email = ? WHERE username = 'admin'",
                (pw_hash, "admin@stratum.local")
            )
        else:
            now = time.time()
            conn.execute(
                "INSERT INTO admin_users (username, email, password_hash, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
                ("admin", "admin@stratum.local", pw_hash, now, now)
            )
    conn.close()

@pytest.fixture
def client():
    return TestClient(app)

@pytest.fixture
def auth_headers(client):
    res = client.post("/api/auth/login", json={
        "username": "admin",
        "password": "AdminSecure2026!"
    })
    token = res.json()["token"]
    return {"Authorization": f"Bearer {token}"}

@pytest.fixture
def sample_csv_bytes():
    csv_text = """OrderID,Date,Product,Category,Quantity,Price,Region
1001,2026-01-05,Laptop,Electronics,2,50000,Indore
1002,2026-01-08,Mouse,Accessories,5,500,Delhi
1003,2026-01-12,Keyboard,Accessories,3,1200,Mumbai
1004,2026-01-15,Mobile,Electronics,4,15000,Indore
1005,2026-02-02,Laptop,Electronics,1,50000,Delhi
1006,2026-02-10,Mouse,Accessories,10,500,Mumbai
1007,2026-02-15,Mobile,Electronics,3,15000,Indore
1008,2026-03-01,Keyboard,Accessories,6,1200,Delhi
1009,2026-03-12,Laptop,Electronics,2,50000,Mumbai
1010,2026-03-20,Mobile,Electronics,5,15000,Indore
"""
    return csv_text.encode("utf-8")

@pytest.fixture
def dirty_csv_bytes():
    """CSV containing missing values, unparseable dates, negative numbers, and duplicate orders."""
    csv_text = """OrderID,Date,Product,Category,Quantity,Price,Region
2001,2026-01-01,Laptop,Electronics,2,50000,Indore
2002,not-a-date,Mouse,Accessories,5,500,Delhi
2003,2026-01-12,Keyboard,Accessories,-3,1200,Mumbai
2004,2026-01-15,Mobile,Electronics,4,-15000,Indore
2001,2026-02-02,Laptop,Electronics,1,50000,Delhi
,2026-02-10,,Accessories,10,500,Mumbai
"""
    return csv_text.encode("utf-8")
