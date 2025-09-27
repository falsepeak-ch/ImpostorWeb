# Cluso - Impostor Party Game Landing Page

A sophisticated, designer-quality landing page for the Cluso impostor party game, optimized for Firebase hosting and featuring the complementary color #FAC700.

## 🎨 Design Features

### Color Palette
- **Primary**: #0078CC (Brand Blue)
- **Complementary**: #FAC700 (Gold) - Used extensively throughout
- **Accent**: #ff6b35 (Orange)
- **Supporting colors**: Various grays and whites

### Typography
- **Headings**: Palamecia (Custom font) - Used extensively for unique brand identity
- **Body**: System font stack for optimal performance
- **Hierarchy**: 7 font sizes with proper scaling

### Visual Elements
- Professional SVG icons (no emojis)
- Sophisticated animations and transitions
- White-bordered hero banner with glow effects
- Floating elements and shapes
- Glass morphism effects

## 🏗️ Project Structure (Firebase Optimized)

```
ClusoImpostorWeb/
├── public/                     # Firebase hosting directory
│   ├── index.html             # Main landing page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css       # Main CSS imports all modules
│   │   │   ├── variables.css   # CSS custom properties & complementary color
│   │   │   ├── base.css       # Base styles and utilities
│   │   │   ├── hero.css       # Hero section with #FAC700 integration
│   │   │   ├── components.css  # Features, games, screenshots, CTA
│   │   │   └── how-to-play.css # Detailed gameplay instructions
│   │   ├── js/
│   │   │   ├── main.js        # App initialization and coordination
│   │   │   ├── utils.js       # Utility functions and analytics
│   │   │   ├── animations.js   # Scroll effects and interactions
│   │   │   └── modal.js       # Screenshot modal functionality
│   │   ├── images/
│   │   │   ├── Icon.png       # App icon
│   │   │   ├── impostor.png   # Hero banner image
│   │   │   └── Screenshots/   # Game screenshots
│   │   └── fonts/
│   │       └── palamecia_titling.ttf
├── firebase.json              # Firebase hosting configuration
├── .firebaserc               # Firebase project configuration
├── deploy.sh                 # Deployment script
└── README.md                 # This file
```

## 🚀 Firebase Deployment

### Prerequisites
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`

### Deploy
```bash
# Make deployment script executable (first time only)
chmod +x deploy.sh

# Deploy to Firebase
./deploy.sh
```

Or manually:
```bash
firebase deploy --only hosting
```

## 📱 Features & Sections

### Hero Section
- **Palamecia font** for brand title
- **#FAC700 complementary color** in highlights and accents
- Interactive floating cards
- Professional stats display
- White-bordered banner with glow effects

### Features Section
- 4 key features with premium card design
- SVG icons with hover transformations
- **Complementary color** accent system

### Detailed How-to-Play
- Comprehensive 4-step gameplay guide
- Strategy cards for crew and impostors
- Victory conditions
- Advanced strategies section
- **Extensive Palamecia typography**

### Multiple Games Showcase
- Featured impostor game highlight
- 5 additional party games
- **Gold accent colors** throughout
- Game meta information

### Screenshots Gallery
- Interactive modal viewing
- **Complementary color** borders on hover
- Responsive grid layout

## 🎯 Complementary Color (#FAC700) Integration

The gold color is strategically used throughout:

- **Hero Section**: Stats icons, highlights, floating card accents
- **Typography**: Gradient text effects, accent spans
- **Interactive Elements**: Hover states, focus indicators
- **UI Components**: Badges, tips, borders
- **Visual Hierarchy**: Section accents, card borders

## 📊 Performance Optimizations

### CSS Optimization
- Modular CSS architecture
- CSS custom properties for theming
- Efficient animations with GPU acceleration
- Responsive design with mobile-first approach

### JavaScript Optimization
- Modular architecture with separate concerns
- Intersection Observer for scroll animations
- Debounced resize handlers
- Lazy loading support

### Image Optimization
- Proper alt tags for accessibility
- Responsive image sizing
- Optimized file formats

### Firebase Optimizations
- Proper caching headers
- Compressed assets
- CDN distribution

## 🔍 SEO & ASO Features

- Comprehensive meta tags
- Structured data markup
- Open Graph integration
- Strategic keyword placement
- Image sitemaps
- Proper semantic HTML

## 🎨 Design System

### Buttons
- Primary (complementary gradient)
- Secondary (outline)
- Large variants
- Proper focus states

### Cards
- Premium variants with accent borders
- Hover transformations
- Glass morphism effects

### Typography
- **Palamecia** for headings and brands
- System fonts for body text
- Proper hierarchy and spacing

## 🛠️ Development

### Adding New Features
1. Create new CSS module in `public/assets/css/`
2. Import in `main.css`
3. Add corresponding JavaScript module if needed
4. Update documentation

### Customizing Colors
Modify CSS custom properties in `variables.css`:
```css
:root {
    --primary-color: #0078CC;
    --complementary-color: #FAC700;
    /* ... other colors */
}
```

## 📋 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement
- Accessibility compliant

## 📄 License

© 2025 False Peak. All rights reserved.

---

**Ready for Firebase deployment with sophisticated design, modular architecture, and extensive use of the complementary #FAC700 color throughout the experience.**

