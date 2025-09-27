#!/usr/bin/env python3
"""
Simple HTTP server for local development
Serves the public directory with proper CORS headers for local development
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

class CORSHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    # Change to the public directory
    public_dir = Path(__file__).parent.parent / "public"
    if not public_dir.exists():
        print(f"Error: Public directory not found at {public_dir}")
        sys.exit(1)
    
    os.chdir(public_dir)
    
    PORT = 8080
    
    # Try to find an available port
    while PORT < 8090:
        try:
            with socketserver.TCPServer(("", PORT), CORSHTTPRequestHandler) as httpd:
                print(f"🚀 Server running at http://localhost:{PORT}")
                print(f"📁 Serving directory: {public_dir}")
                print("📱 Open the URL in your browser to test the app")
                print("⏹️  Press Ctrl+C to stop the server")
                httpd.serve_forever()
        except OSError:
            PORT += 1
            continue
        break
    else:
        print("Error: No available ports found between 8080-8090")
        sys.exit(1)

if __name__ == "__main__":
    main()

