FROM node:20-bookworm-slim AS frontend

WORKDIR /app/frontend-enterprise
COPY frontend-enterprise/package.json frontend-enterprise/package-lock.json ./
RUN npm ci
COPY frontend-enterprise/ ./
RUN npm run build

FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

COPY backend/ backend/
RUN pip install --no-cache-dir -e backend

COPY --from=frontend /app/frontend-enterprise/dist frontend-enterprise/dist

EXPOSE 10000
CMD ["sh", "-c", "TOOL_BASE_URL=http://127.0.0.1:${PORT:-10000} uvicorn single_port_app:app --app-dir backend --host 0.0.0.0 --port ${PORT:-10000}"]
