#!/bin/bash

# Start development server script
# This script starts a local HTTP server for development

echo "🎮 Starting Cluso Development Server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    PYTHON_CMD="python3"
elif command -v python &> /dev/null && python --version | grep -q "Python 3"; then
    PYTHON_CMD="python"
else
    echo "❌ Error: Python 3 is required but not found"
    echo "Please install Python 3 to run the development server"
    exit 1
fi

# Change to script directory
cd "$(dirname "$0")"

# Run the development server
$PYTHON_CMD dev-server.py

