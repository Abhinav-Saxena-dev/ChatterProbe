#!/bin/bash

# Create a new Python virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install the required Python packages
pip install -r requirements.txt

# Start the FastAPI application with automatic reload
uvicorn main:app --host 0.0.0.0 --port 8080 --reload