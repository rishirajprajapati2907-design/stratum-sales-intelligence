"""
FastAPI application for Sales Intelligence Platform backend.
Provides robust REST endpoints for authentication, ingestion, filtering, analytics, and exports.
"""
import io
import time
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, UploadFile, File, Query, HTTPException, Response, Request, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from backend.config import settings
from backend.models import (
    HealthResponse,
    LoginRequest,
    LoginResponse,
    AdminProfile,
    PasswordChangeRequest,
    SecurityAuditEntry,
    DatasetMetadata,
    UploadResponse,
    KPISummary,
    DataQualitySummary,
    MonthlyTrendPoint,
    ProductPerformance,
    RegionalPerformance,
    CategoryPerformance,
    BusinessInsightsResponse,
    ReportSummaryResponse
)
from backend.validator import validate_and_process_csv, ValidationError
from backend.storage import dataset_store
from backend.analytics import (
    apply_filters,
    paginate_and_search_records,
    compute_kpis,
    compute_monthly_trends,
    compute_product_performance,
    compute_top_products,
    compute_regional_performance,
    compute_category_performance,
    compute_business_insights
)
from backend.auth import (
    init_auth_db,
    seed_initial_admin,
    authenticate_admin,
    terminate_session,
    get_current_admin,
    get_current_admin_optional,
    get_security_audit_logs,
    update_admin_password
)

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Commercial-grade REST API for Sales Intelligence, Admin Authentication, Quality Auditing, and Analytics."
)

# Startup: Initialize auth tables and initial administrator credentials
@app.on_event("startup")
def on_startup():
    init_auth_db()
    seed_initial_admin(
        username=os.getenv("ADMIN_USERNAME", "admin"),
        password=os.getenv("ADMIN_PASSWORD", "AdminSecure2026!"),
        email=os.getenv("ADMIN_EMAIL", "admin@stratum.local")
    )

import os

# Configure CORS for local development with React Vite frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(ValidationError)
async def validation_exception_handler(request: Request, exc: ValidationError):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.message, "error_type": "ValidationError"}
    )

def _get_dataset_or_404(dataset_id: Optional[str] = None):
    dataset = dataset_store.get(dataset_id)
    if not dataset:
        raise HTTPException(
            status_code=404,
            detail=f"Dataset '{dataset_id}' not found. Please upload a dataset or initialize the demo dataset."
        )
    return dataset

# =========================================================================
# --- SYSTEM & HEALTH ---
# =========================================================================
@app.get("/health", response_model=HealthResponse, tags=["System"])
async def health_check():
    return HealthResponse(
        status="healthy",
        version=settings.VERSION,
        active_datasets=dataset_store.count()
    )

# =========================================================================
# --- AUTHENTICATION & SECURITY (PHASE 3) ---
# =========================================================================
@app.post("/api/auth/login", response_model=LoginResponse, tags=["Authentication"])
async def login(req_data: LoginRequest, request: Request, response: Response):
    client_ip = request.client.host if request.client else "127.0.0.1"
    user_agent = request.headers.get("user-agent", "Unknown")

    token = authenticate_admin(
        username_or_email=req_data.username,
        password=req_data.password,
        ip_address=client_ip,
        user_agent=user_agent
    )

    # Set secure HTTP-only cookie
    response.set_cookie(
        key="stratum_session",
        value=token,
        max_age=86400,
        httponly=True,
        samesite="lax",
        secure=False  # Set to True in production HTTPS
    )

    return LoginResponse(
        token=token,
        username=req_data.username.lower().strip(),
        email=f"{req_data.username.lower().strip()}@stratum.local",
        expires_at=time.time() + 86400,
        message="Administrator authentication successful"
    )

@app.post("/api/auth/logout", tags=["Authentication"])
async def logout(response: Response, current_admin: Dict[str, Any] = Depends(get_current_admin)):
    terminate_session(current_admin["token"])
    response.delete_cookie("stratum_session")
    response.delete_cookie("nexus_session")
    return {"message": "Session successfully terminated."}

@app.get("/api/auth/me", response_model=AdminProfile, tags=["Authentication"])
async def get_admin_profile(current_admin: Dict[str, Any] = Depends(get_current_admin)):
    return AdminProfile(
        username=current_admin["username"],
        email=current_admin["email"],
        created_at=current_admin["created_at"],
        expires_at=current_admin["expires_at"]
    )

@app.post("/api/auth/change-password", tags=["Authentication"])
async def change_password(data: PasswordChangeRequest, current_admin: Dict[str, Any] = Depends(get_current_admin)):
    update_admin_password(current_admin["username"], data.current_password, data.new_password)
    return {"message": "Password successfully updated."}

@app.get("/api/auth/audit", response_model=List[SecurityAuditEntry], tags=["Authentication"])
async def get_audit_logs(current_admin: Dict[str, Any] = Depends(get_current_admin)):
    return get_security_audit_logs(limit=30)

# =========================================================================
# --- DATASET MANAGEMENT (PHASE 4F) ---
# =========================================================================
@app.post("/api/upload", response_model=UploadResponse, tags=["Dataset Management"])
async def upload_sales_csv(
    file: UploadFile = File(...),
    current_admin: Dict[str, Any] = Depends(get_current_admin)
):
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Invalid file format. Only CSV (.csv) files are supported."
        )

    content = await file.read()
    if len(content) > settings.MAX_UPLOAD_SIZE_BYTES:
        raise HTTPException(
            status_code=413,
            detail=f"File exceeds maximum upload size limit of {settings.MAX_UPLOAD_SIZE_BYTES // (1024 * 1024)}MB."
        )

    df_raw, df_valid, quality = validate_and_process_csv(content, filename=file.filename)
    dataset_id = dataset_store.add(file.filename, df_raw, df_valid, quality)

    return UploadResponse(
        dataset_id=dataset_id,
        filename=file.filename,
        row_count=len(df_raw),
        column_count=len(df_raw.columns),
        columns=df_raw.columns.tolist(),
        quality_summary=quality,
        message=f"Dataset '{file.filename}' successfully validated and stored."
    )

@app.get("/api/datasets", response_model=List[DatasetMetadata], tags=["Dataset Management"])
async def list_available_datasets(current_admin: Optional[Dict[str, Any]] = Depends(get_current_admin_optional)):
    return dataset_store.list_datasets()

@app.delete("/api/datasets/{dataset_id}", tags=["Dataset Management"])
async def delete_dataset(dataset_id: str, current_admin: Dict[str, Any] = Depends(get_current_admin)):
    deleted = dataset_store.delete(dataset_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Dataset not found.")
    return {"message": f"Dataset '{dataset_id}' successfully removed."}

@app.post("/api/datasets/reset-demo", response_model=UploadResponse, tags=["Dataset Management"])
async def reset_demo_dataset(current_admin: Dict[str, Any] = Depends(get_current_admin)):
    d = dataset_store.reset_to_demo()
    return UploadResponse(
        dataset_id=d.dataset_id,
        filename=d.filename,
        row_count=len(d.df_raw),
        column_count=len(d.df_raw.columns),
        columns=d.df_raw.columns.tolist(),
        quality_summary=d.quality,
        message="Demo dataset re-initialized."
    )

@app.get("/api/datasets/demo", response_model=UploadResponse, tags=["Dataset Management"])
async def load_demo_dataset():
    """Public endpoint to load baseline demo dataset info."""
    dataset = dataset_store.get("default-demo")
    if not dataset:
        raise HTTPException(status_code=404, detail="Default demo sales_data.csv not found on server.")
    return UploadResponse(
        dataset_id=dataset.dataset_id,
        filename=dataset.filename,
        row_count=len(dataset.df_raw),
        column_count=len(dataset.df_raw.columns),
        columns=dataset.df_raw.columns.tolist(),
        quality_summary=dataset.quality,
        message="Demo dataset ready."
    )

# =========================================================================
# --- ANALYTICS MODULES (PHASE 4) ---
# =========================================================================
@app.get("/api/summary", response_model=KPISummary, tags=["Analytics"])
async def get_kpi_summary(
    dataset_id: Optional[str] = Query(None, description="Dataset session ID"),
    start_date: Optional[str] = Query(None, description="Start date (YYYY-MM-DD)"),
    end_date: Optional[str] = Query(None, description="End date (YYYY-MM-DD)"),
    region: Optional[str] = Query(None, description="Region filter or 'All'"),
    category: Optional[str] = Query(None, description="Category filter or 'All'")
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_kpis(dataset.df_valid, filtered)

@app.get("/api/sales/trends", response_model=List[MonthlyTrendPoint], tags=["Analytics"])
async def get_sales_trends(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_monthly_trends(filtered)

@app.get("/api/sales/by-region", response_model=List[RegionalPerformance], tags=["Analytics"])
async def get_sales_by_region(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_regional_performance(filtered)

@app.get("/api/sales/by-category", response_model=List[CategoryPerformance], tags=["Analytics"])
async def get_sales_by_category(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_category_performance(filtered)

@app.get("/api/products/all", response_model=List[ProductPerformance], tags=["Analytics"])
async def get_all_products(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_product_performance(filtered)

@app.get("/api/products/top", response_model=List[ProductPerformance], tags=["Analytics"])
async def get_top_products(
    dataset_id: Optional[str] = Query(None),
    limit: int = Query(5, ge=1, le=50),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_top_products(filtered, limit=limit)

@app.get("/api/data-quality", response_model=DataQualitySummary, tags=["Data Quality"])
async def get_data_quality(dataset_id: Optional[str] = Query(None)):
    dataset = _get_dataset_or_404(dataset_id)
    return dataset.quality

@app.get("/api/insights", response_model=BusinessInsightsResponse, tags=["Analytics"])
async def get_business_insights(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return compute_business_insights(filtered)

# --- Data Explorer (Search, Sort, Pagination) ---
@app.get("/api/data/records", tags=["Data Explorer"])
async def get_records(
    dataset_id: Optional[str] = Query(None),
    q: Optional[str] = Query(None, description="Global search query"),
    sort_by: Optional[str] = Query(None, description="Column to sort by"),
    order: str = Query("asc", description="Sort order: 'asc' or 'desc'"),
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    return paginate_and_search_records(
        filtered,
        search_query=q,
        sort_by=sort_by,
        order=order,
        page=page,
        page_size=page_size
    )

# --- Reports Generator ---
@app.get("/api/reports/summary", response_model=ReportSummaryResponse, tags=["Reports"])
async def generate_executive_report(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    kpis = compute_kpis(dataset.df_valid, filtered)
    top_p = compute_top_products(filtered, 5)
    reg_p = compute_regional_performance(filtered)
    cat_p = compute_category_performance(filtered)
    trends = compute_monthly_trends(filtered)
    ins = compute_business_insights(filtered)

    return ReportSummaryResponse(
        generated_at=time.strftime("%Y-%m-%d %H:%M:%S UTC", time.gmtime()),
        dataset_name=dataset.filename,
        kpis=kpis,
        top_products=top_p,
        top_regions=reg_p,
        category_breakdown=cat_p,
        monthly_trend=trends,
        insights=ins.takeaways,
        quality_notes=dataset.quality.validation_policy_notes
    )

# --- Filtered CSV Export ---
@app.get("/api/data/export", tags=["Export"])
async def export_filtered_csv(
    dataset_id: Optional[str] = Query(None),
    start_date: Optional[str] = Query(None),
    end_date: Optional[str] = Query(None),
    region: Optional[str] = Query(None),
    category: Optional[str] = Query(None)
):
    dataset = _get_dataset_or_404(dataset_id)
    filtered = apply_filters(dataset.df_valid, start_date, end_date, region, category)
    
    export_df = filtered.copy()
    export_df["Date"] = export_df["Date"].dt.strftime("%Y-%m-%d")
    csv_str = export_df.to_csv(index=False)
    
    return Response(
        content=csv_str,
        media_type="text/csv",
        headers={"Content-Disposition": 'attachment; filename="filtered_sales_data.csv"'}
    )
