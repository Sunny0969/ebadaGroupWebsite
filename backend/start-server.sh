#!/bin/bash
echo "Starting Backend Server..."
echo ""
cd "$(dirname "$0")"
echo "Current directory: $(pwd)"
echo ""
echo "Installing dependencies if needed..."
npm install
echo ""
echo "Starting server..."
npm run dev
