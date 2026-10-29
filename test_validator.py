"""
Tests for CSV validation, quality audit, and schema integrity.
"""
import pytest
from backend.validator import validate_and_process_csv, ValidationError

def test_valid_csv_processing(sample_csv_bytes):
    raw, valid, quality = validate_and_process_csv(sample_csv_bytes, "test.csv")
    assert len(raw) == 10
    assert len(valid) == 10
    assert quality.total_raw_rows == 10
    assert quality.excluded_rows_count == 0
    assert quality.duplicate_order_ids == 0
    assert "Revenue" in valid.columns
    # Check Revenue formula Q * P
    assert (valid["Revenue"] == valid["Quantity"] * valid["Price"]).all()

def test_empty_csv():
    with pytest.raises(ValidationError) as exc_info:
        validate_and_process_csv(b"", "empty.csv")
    assert "empty" in str(exc_info.value).lower()

def test_missing_required_column():
    csv_missing = b"OrderID,Date,Product,Quantity,Price\n1,2026-01-01,Laptop,1,100"
    with pytest.raises(ValidationError) as exc_info:
        validate_and_process_csv(csv_missing, "bad.csv")
    assert "missing required column" in str(exc_info.value).lower()

def test_dirty_csv_handling(dirty_csv_bytes):
    raw, valid, quality = validate_and_process_csv(dirty_csv_bytes, "dirty.csv")
    assert len(raw) == 6
    # 2002 has invalid date, 2003 has negative qty, 2004 has negative price -> excluded
    assert quality.excluded_rows_count == 3
    assert quality.invalid_dates_count == 1
    assert quality.invalid_quantities_count == 1
    assert quality.invalid_prices_count == 1
    # 2001 appears twice -> duplicate order detected
    assert quality.duplicate_order_ids == 1
    # Remaining valid rows must have strictly positive Quantity and Price
    assert (valid["Quantity"] >= 0).all()
    assert (valid["Price"] >= 0).all()
    assert (valid["Revenue"] == valid["Quantity"] * valid["Price"]).all()

def test_zero_valid_rows_raises_error():
    all_bad = b"OrderID,Date,Product,Category,Quantity,Price,Region\n1,bad-date,Item,Cat,-5,-10,North"
    with pytest.raises(ValidationError) as exc_info:
        validate_and_process_csv(all_bad, "all_bad.csv")
    assert "zero valid rows" in str(exc_info.value).lower()
