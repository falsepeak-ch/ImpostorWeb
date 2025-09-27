#!/bin/bash

# Cluso Landing Page - Vite + Firebase Deployment Script
# Modern build process with Vite for optimal performance

echo "🎮 Cluso Landing Page - Vite + Firebase Deployment"
echo "================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first:"
    echo "https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

# Check if logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase:"
    firebase login
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/

# Build with Vite
echo "🏗️  Building with Vite..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! The dist directory was not created."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📊 Build statistics:"
echo "   - CSS files optimized and minified"
echo "   - JavaScript bundled and compressed"
echo "   - Images processed and optimized"
echo "   - Fonts included with proper caching headers"

# Deploy to Firebase
echo "🚀 Deploying to Firebase..."
firebase deploy --only hosting

# Check deployment status
if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "🌐 Your Cluso landing page is now live with Vite optimization!"
    echo ""
    echo "✨ Vite Optimizations Applied:"
    echo "   • CSS bundling and minification"
    echo "   • JavaScript tree-shaking and compression"
    echo "   • Image optimization and lazy loading"
    echo "   • Font loading optimization"
    echo "   • Asset fingerprinting for caching"
    echo ""
    echo "📊 Next steps:"
    echo "1. Test the live site on multiple devices"
    echo "2. Run Google PageSpeed Insights (should see improved scores!)"
    echo "3. Set up Firebase Analytics (optional)"
    echo "4. Configure custom domain (if needed)"
    echo ""
    echo "🔗 Firebase Console: https://console.firebase.google.com/project/impostor-ffbfc"
    echo "🔗 Local preview: npm run preview"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi

