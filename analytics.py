"""
Analytics engine providing vectorized calculations, multi-dimensional aggregations,
consistent filtering, dynamic business insights, search, sorting, and pagination.
"""
from typing import Optional, List, Dict, Any, Tuple
import pandas as pd
from backend.models import (
    KPISummary,
    MonthlyTrendPoint,
    ProductPerformance,
    RegionalPerformance,
    CategoryPerformance,
    BusinessInsightsResponse
)

def apply_filters(
    df: pd.DataFrame,
    start_date: Optional[str] = None,
    end_date: Optional[str] = None,
    region: Optional[str] = None,
    category: Optional[str] = None
) -> pd.DataFrame:
    """
    Applies date range, regional, and categorical filters consistently to the DataFrame.
    """
    if df.empty:
        return df

    filtered = df.copy()

    # 1. Date filter
    if start_date:
        try:
            start_dt = pd.to_datetime(start_date).date()
            filtered = filtered[filtered["Date"].dt.date >= start_dt]
        except Exception:
            pass

    if end_date:
        try:
            end_dt = pd.to_datetime(end_date).date()
            filtered = filtered[filtered["Date"].dt.date <= end_dt]
        except Exception:
            pass

    # 2. Region filter
    if region and region != "All":
        filtered = filtered[filtered["Region"].str.lower() == region.strip().lower()]

    # 3. Category filter
    if category and category != "All":
        filtered = filtered[filtered["Category"].str.lower() == category.strip().lower()]

    return filtered

def paginate_and_search_records(
    df: pd.DataFrame,
    search_query: Optional[str] = None,
    sort_by: Optional[str] = None,
    order: str = "asc",
    page: int = 1,
    page_size: int = 20
) -> Dict[str, Any]:
    """
    Applies search across multiple columns, dynamic column sorting, and pagination.
    """
    if df.empty:
        return {
            "total": 0,
            "page": page,
            "page_size": page_size,
            "total_pages": 0,
            "records": []
        }

    data = df.copy()

    # Global search query across string and ID fields
    if search_query and search_query.strip():
        q = search_query.strip().lower()
        search_mask = (
            data["Product"].astype(str).str.lower().str.contains(q, na=False) |
            data["Category"].astype(str).str.lower().str.contains(q, na=False) |
            data["Region"].astype(str).str.lower().str.contains(q, na=False) |
            data["OrderID"].astype(str).str.lower().str.contains(q, na=False)
        )
        data = data[search_mask]

    # Dynamic sorting
    if sort_by and sort_by in data.columns:
        ascending = order.lower() == "asc"
        data = data.sort_values(by=sort_by, ascending=ascending)
    else:
        # Default: newest dates first
        data = data.sort_values(by="Date", ascending=False)

    total_records = len(data)
    total_pages = (total_records + page_size - 1) // page_size if total_records > 0 else 0
    safe_page = max(1, min(page, total_pages)) if total_pages > 0 else 1

    start_idx = (safe_page - 1) * page_size
    end_idx = start_idx + page_size
    page_slice = data.iloc[start_idx:end_idx].copy()

    # Format Date column for JSON serializability
    page_slice["Date"] = page_slice["Date"].dt.strftime("%Y-%m-%d")

    return {
        "total": total_records,
        "page": safe_page,
        "page_size": page_size,
        "total_pages": total_pages,
        "records": page_slice.to_dict(orient="records")
    }

def compute_kpis(df_base: pd.DataFrame, df_filtered: pd.DataFrame) -> KPISummary:
    """
    Computes top-level Key Performance Indicators.
    """
    total_rev = float(df_filtered["Revenue"].sum()) if not df_filtered.empty else 0.0
    units_sold = int(df_filtered["Quantity"].sum()) if not df_filtered.empty else 0
    
    # Unique order count prevents double-counting multi-item receipts
    order_count = int(df_filtered["OrderID"].nunique()) if not df_filtered.empty else 0
    
    # AOV definition: Total Revenue divided by Distinct Orders
    aov = (total_rev / order_count) if order_count > 0 else 0.0

    # Date range bounds from full dataset
    min_date_str = str(df_base["Date"].dt.date.min()) if not df_base.empty else ""
    max_date_str = str(df_base["Date"].dt.date.max()) if not df_base.empty else ""

    available_regions = ["All"] + sorted(df_base["Region"].dropna().unique().tolist())
    available_categories = ["All"] + sorted(df_base["Category"].dropna().unique().tolist())

    return KPISummary(
        total_revenue=round(total_rev, 2),
        total_orders=order_count,
        total_units_sold=units_sold,
        average_order_value=round(aov, 2),
        min_date=min_date_str,
        max_date=max_date_str,
        available_regions=available_regions,
        available_categories=available_categories,
        active_records_count=len(df_filtered)
    )

def compute_monthly_trends(df: pd.DataFrame) -> List[MonthlyTrendPoint]:
    """
    Aggregates revenue and units over time by month, sorted chronologically.
    """
    if df.empty:
        return []

    monthly = (
        df.assign(Month=df["Date"].dt.to_period("M").astype(str))
        .groupby("Month", as_index=False)
        .agg(
            revenue=("Revenue", "sum"),
            units_sold=("Quantity", "sum"),
            order_count=("OrderID", "nunique")
        )
        .sort_values("Month")
    )

    points: List[MonthlyTrendPoint] = []
    for _, row in monthly.iterrows():
        points.append(MonthlyTrendPoint(
            month=str(row["Month"]),
            revenue=round(float(row["revenue"]), 2),
            units_sold=int(row["units_sold"]),
            order_count=int(row["order_count"])
        ))
    return points

def compute_product_performance(df: pd.DataFrame) -> List[ProductPerformance]:
    """
    Ranks all products by revenue descending.
    """
    if df.empty:
        return []

    total_revenue = float(df["Revenue"].sum())
    products = (
        df.groupby("Product", as_index=False)
        .agg(
            revenue=("Revenue", "sum"),
            units_sold=("Quantity", "sum")
        )
        .sort_values("revenue", ascending=False)
    )

    result: List[ProductPerformance] = []
    for _, row in products.iterrows():
        rev = float(row["revenue"])
        share = round((rev / total_revenue * 100), 1) if total_revenue > 0 else 0.0
        result.append(ProductPerformance(
            product=str(row["Product"]),
            revenue=round(rev, 2),
            units_sold=int(row["units_sold"]),
            revenue_share_pct=share
        ))
    return result

def compute_top_products(df: pd.DataFrame, limit: int = 5) -> List[ProductPerformance]:
    """
    Returns top N products by revenue.
    """
    all_prods = compute_product_performance(df)
    return all_prods[:limit]

def compute_regional_performance(df: pd.DataFrame) -> List[RegionalPerformance]:
    """
    Aggregates sales by region sorted by revenue descending.
    """
    if df.empty:
        return []

    total_revenue = float(df["Revenue"].sum())
    regional = (
        df.groupby("Region", as_index=False)
        .agg(
            revenue=("Revenue", "sum"),
            units_sold=("Quantity", "sum")
        )
        .sort_values("revenue", ascending=False)
    )

    result: List[RegionalPerformance] = []
    for _, row in regional.iterrows():
        rev = float(row["revenue"])
        share = round((rev / total_revenue * 100), 1) if total_revenue > 0 else 0.0
        result.append(RegionalPerformance(
            region=str(row["Region"]),
            revenue=round(rev, 2),
            units_sold=int(row["units_sold"]),
            revenue_share_pct=share
        ))
    return result

def compute_category_performance(df: pd.DataFrame) -> List[CategoryPerformance]:
    """
    Aggregates sales by category sorted by revenue descending.
    """
    if df.empty:
        return []

    total_revenue = float(df["Revenue"].sum())
    categories = (
        df.groupby("Category", as_index=False)
        .agg(
            revenue=("Revenue", "sum"),
            units_sold=("Quantity", "sum")
        )
        .sort_values("revenue", ascending=False)
    )

    result: List[CategoryPerformance] = []
    for _, row in categories.iterrows():
        rev = float(row["revenue"])
        share = round((rev / total_revenue * 100), 1) if total_revenue > 0 else 0.0
        result.append(CategoryPerformance(
            category=str(row["Category"]),
            revenue=round(rev, 2),
            units_sold=int(row["units_sold"]),
            revenue_share_pct=share
        ))
    return result

def compute_business_insights(df: pd.DataFrame) -> BusinessInsightsResponse:
    """
    Derives automated, dynamic commercial insights from the active filtered slice.
    """
    if df.empty:
        return BusinessInsightsResponse(
            best_product="N/A",
            best_product_revenue=0.0,
            best_region="N/A",
            best_region_revenue=0.0,
            best_category="N/A",
            best_category_revenue=0.0,
            highest_revenue_month="N/A",
            highest_month_revenue=0.0,
            average_order_value=0.0,
            takeaways=["No data available matching the selected filter criteria."]
        )

    total_revenue = float(df["Revenue"].sum())
    order_count = int(df["OrderID"].nunique())
    aov = (total_revenue / order_count) if order_count > 0 else 0.0

    # Best product
    prods = compute_product_performance(df)
    best_prod = prods[0].product if prods else "N/A"
    best_prod_rev = prods[0].revenue if prods else 0.0
    best_prod_pct = prods[0].revenue_share_pct if prods else 0.0

    # Best region
    regions = compute_regional_performance(df)
    best_reg = regions[0].region if regions else "N/A"
    best_reg_rev = regions[0].revenue if regions else 0.0
    best_reg_pct = regions[0].revenue_share_pct if regions else 0.0

    # Best category
    cats = compute_category_performance(df)
    best_cat = cats[0].category if cats else "N/A"
    best_cat_rev = cats[0].revenue if cats else 0.0
    best_cat_pct = cats[0].revenue_share_pct if cats else 0.0

    # Highest revenue month
    months = compute_monthly_trends(df)
    if months:
        peak_month_obj = max(months, key=lambda m: m.revenue)
        peak_month = peak_month_obj.month
        peak_month_rev = peak_month_obj.revenue
        peak_month_pct = round((peak_month_rev / total_revenue * 100), 1) if total_revenue > 0 else 0.0
    else:
        peak_month = "N/A"
        peak_month_rev = 0.0
        peak_month_pct = 0.0

    takeaways = [
        f"Product Leader: {best_prod} accounts for ₹{best_prod_rev:,.2f} ({best_prod_pct}% of total sales), making it the primary revenue driver.",
        f"Regional Strength: {best_reg} generated ₹{best_reg_rev:,.2f} ({best_reg_pct}% of regional sales), leading geographic performance.",
        f"Peak Performance: Month {peak_month} recorded peak revenue of ₹{peak_month_rev:,.2f} ({peak_month_pct}% of turnover) with an Average Order Value of ₹{aov:,.2f}."
    ]

    return BusinessInsightsResponse(
        best_product=best_prod,
        best_product_revenue=best_prod_rev,
        best_region=best_reg,
        best_region_revenue=best_reg_rev,
        best_category=best_cat,
        best_category_revenue=best_cat_rev,
        highest_revenue_month=peak_month,
        highest_month_revenue=peak_month_rev,
        average_order_value=round(aov, 2),
        takeaways=takeaways
    )
