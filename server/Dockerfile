# Use a smaller base image
FROM python:3.11-alpine

# Set environment variables to reduce image size and improve security
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install dependencies
RUN apk add --no-cache gcc musl-dev libffi-dev && \
    pip install --no-cache-dir --upgrade pip

# Set the working directory
WORKDIR /app

# Copy requirements file first to leverage caching
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy only necessary application files
COPY . .

# Expose the application port
EXPOSE 8080

# Set the default command to run the application
CMD ["flask", "run", "--host=0.0.0.0", "--port=8080"]
