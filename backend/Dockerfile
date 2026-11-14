FROM python:3.12-slim-bookworm
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1 SQLITE_DB_PATH=/data/pulumi_state_audit.db
WORKDIR /app
RUN apt-get update && apt-get install -y --no-install-recommends libsqlite3-0 curl && rm -rf /var/lib/apt/lists/*
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt
COPY main.py /app/main.py
RUN mkdir -p /data
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
