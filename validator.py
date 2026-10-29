"""
Data validation, cleaning, and quality audit module.
Implements strict validation policies without silent deletion.
"""
import io
import pandas as pd
from typing import Tuple, Dict, Any, List
from backend.models import DataQualitySummary, MissingValueReport

REQUIRED_COLUMNS = ["OrderID", "Date", "Product", "Category", "Quantity", "Price", "Region"]

class ValidationError(Exception):
    """Custom exception raised when uploaded data fails schema or format constraints."""
    def __init__(self, message: str, status_code: int = 400):
        super().__init__(message)
        self.message = message
        self.status_code = status_code

def validate_and_process_csv(csv_bytes: bytes, filename: str = "upload.csv") -> Tuple[pd.DataFrame, pd.DataFrame, DataQualitySummary]:
    """
    Ingests and validates raw CSV bytes.
    
    Returns:
        (df_raw, df_valid, quality_summary)
        
    Raises:
        ValidationError: If the file is empty, malformed, or missing required schema columns.
    """
    if not csv_bytes or len(csv_bytes.strip()) == 0:
        raise ValidationError("Uploaded file is empty. Please provide a CSV file with sales transactions.")
        
    try:
        # Read raw CSV with flexible encoding fallback
        try:
            df_raw = pd.read_csv(io.BytesIO(csv_bytes), encoding="utf-8")
        except UnicodeDecodeError:
            df_raw = pd.read_csv(io.BytesIO(csv_bytes), encoding="latin1")
    except Exception as e:
        raise ValidationError(f"Failed to parse CSV file: {str(e)}")

    if df_raw.empty:
        raise ValidationError("The uploaded CSV file contains no data rows.")

    # 1. Clean header whitespace and map case-insensitive/spaced column names to canonical schema
    col_mapping = {}
    for col in df_raw.columns:
        clean = str(col).strip()
        normalized = clean.lower().replace(" ", "").replace("_", "")
        matched = False
        for req in REQUIRED_COLUMNS:
            if normalized == req.lower():
                col_mapping[col] = req
                matched = True
                break
        if not matched:
            col_mapping[col] = clean
    df_raw = df_raw.rename(columns=col_mapping)

    # 2. Check required schema columns
    missing_cols = [col for col in REQUIRED_COLUMNS if col not in df_raw.columns]
    if missing_cols:
        raise ValidationError(
            f"Missing required column(s): {', '.join(missing_cols)}. "
            f"Dataset must include: {', '.join(REQUIRED_COLUMNS)}."
        )

    total_raw_rows = len(df_raw)
    total_cols = len(df_raw.columns)

    # 3. Missing values analysis
    missing_counts = df_raw.isna().sum()
    missing_reports: List[MissingValueReport] = []
    for col in df_raw.columns:
        cnt = int(missing_counts[col])
        pct = round((cnt / total_raw_rows) * 100, 2) if total_raw_rows > 0 else 0.0
        missing_reports.append(MissingValueReport(
            column=col,
            missing_count=cnt,
            missing_percentage=pct
        ))

    # 4. Duplicate Order ID detection
    duplicate_exact_rows = int(df_raw.duplicated().sum())
    duplicate_order_ids = int(df_raw.duplicated(subset=["OrderID"]).sum())

    # 5. Type conversions and validity checks
    parsed_dates = pd.to_datetime(df_raw["Date"], errors="coerce")
    invalid_dates_mask = parsed_dates.isna()
    invalid_dates_count = int(invalid_dates_mask.sum())

    parsed_qty = pd.to_numeric(df_raw["Quantity"], errors="coerce")
    invalid_qty_mask = parsed_qty.isna() | (parsed_qty < 0)
    invalid_qty_count = int(invalid_qty_mask.sum())

    parsed_price = pd.to_numeric(df_raw["Price"], errors="coerce")
    invalid_price_mask = parsed_price.isna() | (parsed_price < 0)
    invalid_price_count = int(invalid_price_mask.sum())

    # Identify rows with any validity issues (unparseable dates, negative/missing numbers)
    invalid_row_mask = invalid_dates_mask | invalid_qty_mask | invalid_price_mask
    excluded_rows_count = int(invalid_row_mask.sum())
    valid_rows_count = total_raw_rows - excluded_rows_count

    # 6. Build validated DataFrame for analytics
    df_valid = df_raw.copy()
    df_valid["Date"] = parsed_dates
    df_valid["Quantity"] = parsed_qty
    df_valid["Price"] = parsed_price
    df_valid["Product"] = df_valid["Product"].fillna("Unknown").astype(str).str.strip()
    df_valid["Category"] = df_valid["Category"].fillna("Unknown").astype(str).str.strip()
    df_valid["Region"] = df_valid["Region"].fillna("Unknown").astype(str).str.strip()

    # Filter out invalid rows for accurate mathematical aggregations
    df_valid = df_valid[~invalid_row_mask].copy()

    if df_valid.empty:
        raise ValidationError(
            "Zero valid rows remain after validation. Ensure your dataset contains parseable dates and non-negative numbers."
        )

    # 7. Compute Revenue = Quantity * Price strictly
    df_valid["Revenue"] = df_valid["Quantity"] * df_valid["Price"]

    # 8. Document validation policy notes
    policy_notes: List[str] = [
        "Revenue is strictly calculated as Quantity * Price.",
        "Profit is excluded because the dataset contains no cost or margin data.",
    ]
    if excluded_rows_count > 0:
        policy_notes.append(
            f"Excluded {excluded_rows_count} row(s) with unparseable dates or negative/non-numeric prices/quantities from calculations."
        )
    if duplicate_order_ids > 0:
        policy_notes.append(
            f"Detected {duplicate_order_ids} repeated OrderID entries. In retail, these represent multi-item transactions. "
            "Individual line items are retained, while unique order counts use distinct OrderIDs."
        )
    else:
        policy_notes.append("All OrderIDs are distinct; no duplicate transactions detected.")

    quality_summary = DataQualitySummary(
        total_raw_rows=total_raw_rows,
        total_columns=total_cols,
        valid_rows_count=valid_rows_count,
        excluded_rows_count=excluded_rows_count,
        duplicate_exact_rows=duplicate_exact_rows,
        duplicate_order_ids=duplicate_order_ids,
        invalid_dates_count=invalid_dates_count,
        invalid_quantities_count=invalid_qty_count,
        invalid_prices_count=invalid_price_count,
        missing_values_by_column=missing_reports,
        validation_policy_notes=policy_notes
    )

    return df_raw, df_valid, quality_summary
