"""
Tests for analytics calculations, filters, trends, and rankings.
"""
import pytest
from backend.validator import validate_and_process_csv
from backend.analytics import (
    apply_filters,
    compute_kpis,
    compute_monthly_trends,
    compute_product_performance,
    compute_top_products,
    compute_regional_performance,
    compute_category_performance,
    compute_business_insights
)

def test_kpi_calculations(sample_csv_bytes):
    _, valid, _ = validate_and_process_csv(sample_csv_bytes)
    kpis = compute_kpis(valid, valid)
    assert kpis.total_revenue == 448300.0
    assert kpis.total_orders == 10
    assert kpis.total_units_sold == 41
    assert kpis.average_order_value == 44830.0
    assert kpis.min_date == "2026-01-05"
    assert kpis.max_date == "2026-03-20"

def test_filtering_logic(sample_csv_bytes):
    _, valid, _ = validate_and_process_csv(sample_csv_bytes)
    
    # 1. Regional Filter
    indore_df = apply_filters(valid, region="Indore")
    assert len(indore_df) == 4
    assert indore_df["Revenue"].sum() == 280000.0

    # 2. Category Filter
    acc_df = apply_filters(valid, category="Accessories")
    assert len(acc_df) == 4
    assert acc_df["Revenue"].sum() == 18300.0

    # 3. Date Range Filter
    sub_date_df = apply_filters(valid, start_date="2026-02-01", end_date="2026-02-28")
    assert len(sub_date_df) == 3
    assert sub_date_df["Revenue"].sum() == 100000.0

def test_top_products_ranking(sample_csv_bytes):
    _, valid, _ = validate_and_process_csv(sample_csv_bytes)
    top_prods = compute_top_products(valid, limit=5)
    assert len(top_prods) <= 5
    # Laptop should be #1 with 250000, Mobile #2 with 180000
    assert top_prods[0].product == "Laptop"
    assert top_prods[0].revenue == 250000.0
    assert top_prods[1].product == "Mobile"
    assert top_prods[1].revenue == 180000.0

def test_monthly_trends_sorted(sample_csv_bytes):
    _, valid, _ = validate_and_process_csv(sample_csv_bytes)
    trends = compute_monthly_trends(valid)
    months = [t.month for t in trends]
    assert months == sorted(months)
    assert len(trends) == 3
    assert trends[0].month == "2026-01"
    assert trends[1].month == "2026-02"
    assert trends[2].month == "2026-03"

def test_business_insights(sample_csv_bytes):
    _, valid, _ = validate_and_process_csv(sample_csv_bytes)
    insights = compute_business_insights(valid)
    assert insights.best_product == "Laptop"
    assert insights.best_region == "Indore"
    assert insights.best_category == "Electronics"
    assert insights.highest_revenue_month == "2026-03"
    assert len(insights.takeaways) == 3
