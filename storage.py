"""
Thread-safe session-based dataset store.
Isolates uploaded datasets by unique UUID to prevent state leakage between user sessions.
"""
import time
import uuid
import threading
from typing import Dict, Optional, Tuple, List, Any
import pandas as pd
from backend.models import DataQualitySummary
from backend.config import settings
from backend.validator import validate_and_process_csv

class StoredDataset:
    def __init__(self, dataset_id: str, filename: str, df_raw: pd.DataFrame, df_valid: pd.DataFrame, quality: DataQualitySummary):
        self.dataset_id = dataset_id
        self.filename = filename
        self.df_raw = df_raw
        self.df_valid = df_valid
        self.quality = quality
        self.created_at = time.time()
        self.last_accessed = time.time()

    def touch(self):
        self.last_accessed = time.time()

class DatasetStore:
    def __init__(self):
        self._store: Dict[str, StoredDataset] = {}
        self._lock = threading.Lock()
        self._default_id = "default-demo"

    def _cleanup_expired(self):
        """Removes expired datasets based on TTL."""
        now = time.time()
        expired_keys = [
            k for k, v in self._store.items()
            if k != self._default_id and (now - v.last_accessed > settings.SESSION_TTL_SECONDS)
        ]
        for k in expired_keys:
            del self._store[k]

    def add(self, filename: str, df_raw: pd.DataFrame, df_valid: pd.DataFrame, quality: DataQualitySummary, custom_id: Optional[str] = None) -> str:
        with self._lock:
            self._cleanup_expired()
            
            # If store is at capacity, remove the oldest non-default entry
            if len(self._store) >= settings.MAX_CACHED_DATASETS:
                oldest_key = min(
                    (k for k in self._store if k != self._default_id),
                    key=lambda k: self._store[k].last_accessed,
                    default=None
                )
                if oldest_key:
                    del self._store[oldest_key]

            dataset_id = custom_id or str(uuid.uuid4())
            self._store[dataset_id] = StoredDataset(dataset_id, filename, df_raw, df_valid, quality)
            return dataset_id

    def get(self, dataset_id: Optional[str] = None) -> Optional[StoredDataset]:
        with self._lock:
            self._cleanup_expired()
            target_id = dataset_id or self._default_id
            
            # If requesting default and it doesn't exist yet, attempt to load local sales_data.csv
            if target_id == self._default_id and target_id not in self._store:
                self._load_default_sales_data()

            dataset = self._store.get(target_id)
            if dataset:
                dataset.touch()
            return dataset

    def list_datasets(self) -> List[Dict[str, Any]]:
        """Returns list of active datasets with metadata."""
        with self._lock:
            self._cleanup_expired()
            if self._default_id not in self._store:
                self._load_default_sales_data()

            result = []
            for d_id, d in self._store.items():
                result.append({
                    "dataset_id": d.dataset_id,
                    "filename": d.filename,
                    "total_rows": len(d.df_raw),
                    "valid_rows": len(d.df_valid),
                    "raw_row_count": len(d.df_raw),
                    "valid_row_count": len(d.df_valid),
                    "columns": d.df_raw.columns.tolist(),
                    "created_at": d.created_at,
                    "is_default": d_id == self._default_id,
                    "is_demo": d_id == self._default_id
                })
            return sorted(result, key=lambda x: x["created_at"], reverse=True)

    def delete(self, dataset_id: str) -> bool:
        """Deletes a custom dataset. Protects default baseline from accidental loss."""
        with self._lock:
            if dataset_id == self._default_id:
                # Reload clean default rather than leaving empty
                self._load_default_sales_data()
                return True
            if dataset_id in self._store:
                del self._store[dataset_id]
                return True
            return False

    def reset_to_demo(self) -> StoredDataset:
        """Re-initializes demo sales_data.csv from disk."""
        with self._lock:
            self._load_default_sales_data()
            return self._store[self._default_id]

    def _load_default_sales_data(self):
        """Loads local sales_data.csv as the baseline default dataset."""
        import os
        path = "sales_data.csv"
        if os.path.exists(path):
            try:
                with open(path, "rb") as f:
                    csv_bytes = f.read()
                raw, valid, quality = validate_and_process_csv(csv_bytes, filename="sales_data.csv")
                self._store[self._default_id] = StoredDataset(self._default_id, "sales_data.csv", raw, valid, quality)
            except Exception as e:
                print(f"[Storage Warning] Could not preload default sales_data.csv: {e}")

    def count(self) -> int:
        with self._lock:
            return len(self._store)

# Global dataset store instance
dataset_store = DatasetStore()
