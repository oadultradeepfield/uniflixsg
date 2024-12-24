# Use python:3.10-slim-buster as the base image
FROM python:3.10-slim-buster

# Set environment variables to reduce image size and improve security
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy requirements file first to leverage caching
COPY requirements.txt .

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libffi-dev libatlas-base-dev && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install psycopg2 explicitly (if not in requirements.txt)
RUN pip install --no-cache-dir psycopg2-binary

# Download the SentenceTransformer model during the build process
RUN python -c "from sentence_transformers import SentenceTransformer; SentenceTransformer('all-MiniLM-L6-v2')"

# Copy the application files
COPY . .

# Expose the application port
EXPOSE 8080

# Set the default command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=8080"]
