"""
Configuration settings for Sales Intelligence Platform backend.
Keeps environment configuration separated from application logic.
"""
import os
from typing import List
from pydantic import BaseModel

class Settings(BaseModel):
    PROJECT_NAME: str = "Stratum Sales Intelligence API"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    # CORS: Allow frontend Vite dev server and common localhost ports
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8501",
        "http://127.0.0.1:8501",
    ]
    
    # Upload and dataset constraints
    MAX_UPLOAD_SIZE_BYTES: int = 10 * 1024 * 1024  # 10 MB limit
    MAX_ROW_COUNT: int = 100_000                  # Maximum rows for in-memory safety
    SESSION_TTL_SECONDS: int = 3600               # 1 hour dataset retention
    MAX_CACHED_DATASETS: int = 50                 # Prevent memory bloat

settings = Settings()
