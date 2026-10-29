"""
Pydantic data models for request validation and response schemas.
"""
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

# --- Authentication Models ---
class LoginRequest(BaseModel):
    username: str = Field(..., description="Username or email address")
    password: str = Field(..., min_length=1, description="Password")

class LoginResponse(BaseModel):
    token: str
    username: str
    email: str
    expires_at: float
    message: str = "Login successful"

class AdminProfile(BaseModel):
    username: str
    email: str
    created_at: float
    expires_at: float
    role: str = "Super Administrator"

class PasswordChangeRequest(BaseModel):
    current_password: str
    new_password: str = Field(..., min_length=8)

class SecurityAuditEntry(BaseModel):
    timestamp: float
    username: str
    ip_address: Optional[str] = None
    success: bool
    failure_reason: Optional[str] = None

# --- Dataset Management Models ---
class DatasetMetadata(BaseModel):
    dataset_id: str
    filename: str
    total_rows: int
    valid_rows: int
    raw_row_count: int = 0
    valid_row_count: int = 0
    columns: List[str] = []
    created_at: float
    is_default: bool
    is_demo: bool = False

# --- Filter Parameters ---
class FilterParams(BaseModel):
    dataset_id: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    region: Optional[str] = None
    category: Optional[str] = None

# --- Data Quality Models ---
class MissingValueReport(BaseModel):
    column: str
    missing_count: int
    missing_percentage: float

class DataQualitySummary(BaseModel):
    total_raw_rows: int
    total_columns: int
    valid_rows_count: int
    excluded_rows_count: int
    duplicate_exact_rows: int
    duplicate_order_ids: int
    invalid_dates_count: int
    invalid_quantities_count: int
    invalid_prices_count: int
    missing_values_by_column: List[MissingValueReport]
    validation_policy_notes: List[str]

# --- KPI & Metrics Models ---
class KPISummary(BaseModel):
    total_revenue: float
    total_orders: int
    total_units_sold: int
    average_order_value: float
    min_date: str
    max_date: str
    available_regions: List[str]
    available_categories: List[str]
    active_records_count: int
    revenue_formula: str = "Quantity * Price"
    profit_note: str = "Profit is excluded because product cost data is unavailable."

# --- Chart & Trend Models ---
class MonthlyTrendPoint(BaseModel):
    month: str
    revenue: float
    units_sold: int
    order_count: int

class ProductPerformance(BaseModel):
    product: str
    revenue: float
    units_sold: int
    revenue_share_pct: float

class RegionalPerformance(BaseModel):
    region: str
    revenue: float
    units_sold: int
    revenue_share_pct: float

class CategoryPerformance(BaseModel):
    category: str
    revenue: float
    units_sold: int
    revenue_share_pct: float

# --- Business Insights ---
class BusinessInsightsResponse(BaseModel):
    best_product: str
    best_product_revenue: float
    best_region: str
    best_region_revenue: float
    best_category: str
    best_category_revenue: float
    highest_revenue_month: str
    highest_month_revenue: float
    average_order_value: float
    takeaways: List[str]

# --- Upload Response ---
class UploadResponse(BaseModel):
    dataset_id: str
    filename: str
    row_count: int
    column_count: int
    columns: List[str]
    quality_summary: DataQualitySummary
    message: str

# --- Report Models ---
class ReportSummaryResponse(BaseModel):
    generated_at: str
    dataset_name: str
    kpis: KPISummary
    top_products: List[ProductPerformance]
    top_regions: List[RegionalPerformance]
    category_breakdown: List[CategoryPerformance]
    monthly_trend: List[MonthlyTrendPoint]
    insights: List[str]
    quality_notes: List[str]

# --- Health Check ---
class HealthResponse(BaseModel):
    status: str
    version: str
    active_datasets: int
