"""
Integration tests for FastAPI endpoints: upload, demo, summary, trends, products, export.
"""
import io
import pytest

def test_health_endpoint(client):
    res = client.get("/health")
    assert res.status_code == 200
    data = res.json()
    assert data["status"] == "healthy"

def test_demo_dataset_endpoint(client):
    res = client.get("/api/datasets/demo")
    assert res.status_code == 200
    data = res.json()
    assert data["dataset_id"] == "default-demo"
    assert data["row_count"] == 10
    assert "OrderID" in data["columns"]

def test_upload_endpoint(client, sample_csv_bytes, auth_headers):
    files = {"file": ("my_sales.csv", io.BytesIO(sample_csv_bytes), "text/csv")}
    res = client.post("/api/upload", files=files, headers=auth_headers)
    assert res.status_code == 200
    data = res.json()
    assert "dataset_id" in data
    assert data["row_count"] == 10
    assert data["quality_summary"]["valid_rows_count"] == 10

def test_summary_and_filtering(client, sample_csv_bytes, auth_headers):
    # Upload custom dataset
    files = {"file": ("test_sales.csv", io.BytesIO(sample_csv_bytes), "text/csv")}
    up_res = client.post("/api/upload", files=files, headers=auth_headers)
    dataset_id = up_res.json()["dataset_id"]

    # Full summary
    res = client.get(f"/api/summary?dataset_id={dataset_id}")
    assert res.status_code == 200
    data = res.json()
    assert data["total_revenue"] == 448300.0
    assert data["total_orders"] == 10

    # Filtered by Region
    res_filtered = client.get(f"/api/summary?dataset_id={dataset_id}&region=Delhi")
    assert res_filtered.status_code == 200
    data_filtered = res_filtered.json()
    assert data_filtered["total_revenue"] == 59700.0
    assert data_filtered["total_orders"] == 3

def test_dataset_session_isolation(client, sample_csv_bytes, dirty_csv_bytes, auth_headers):
    # Upload clean dataset
    f1 = {"file": ("clean.csv", io.BytesIO(sample_csv_bytes), "text/csv")}
    r1 = client.post("/api/upload", files=f1, headers=auth_headers).json()
    id1 = r1["dataset_id"]

    # Upload dirty dataset
    f2 = {"file": ("dirty.csv", io.BytesIO(dirty_csv_bytes), "text/csv")}
    r2 = client.post("/api/upload", files=f2, headers=auth_headers).json()
    id2 = r2["dataset_id"]

    # Verify id1 and id2 return completely independent figures
    data1 = client.get(f"/api/summary?dataset_id={id1}").json()
    data2 = client.get(f"/api/summary?dataset_id={id2}").json()

    assert data1["total_revenue"] == 448300.0
    assert data2["total_revenue"] != data1["total_revenue"]
    assert id1 != id2

def test_top_products_endpoint(client):
    res = client.get("/api/products/top?limit=3")
    assert res.status_code == 200
    data = res.json()
    assert len(data) <= 3
    assert data[0]["product"] == "Laptop"

def test_csv_export_endpoint(client):
    res = client.get("/api/data/export?region=Mumbai")
    assert res.status_code == 200
    assert res.headers["content-type"] == "text/csv; charset=utf-8"
    assert "Mumbai" in res.text
    # Should not contain Indore or Delhi
    assert "Indore" not in res.text
