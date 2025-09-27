/*
 * Main JavaScript application for Cluso Landing Page
 * Coordinates all modules and initializes the app
 */

// Main application class
class ClusoApp {
    constructor() {
        this.isInitialized = false;
        this.modules = {};
    }
    
    // Initialize the application
    init() {
        if (this.isInitialized) {
            console.warn('Cluso app already initialized');
            return;
        }
        
        console.log('🎮 Initializing Cluso Landing Page...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }
    
    // Start the application
    start() {
        try {
            // Initialize core utilities
            if (window.ClusoUtils) {
                this.modules.utils = window.ClusoUtils;
                this.modules.utils.setupSmoothScroll();
                this.modules.utils.monitorPerformance();
            }
            
            // Initialize animations with delay for smooth loading
            setTimeout(() => {
                if (window.ClusoAnimations) {
                    this.modules.animations = window.ClusoAnimations;
                    this.modules.animations.initializeAnimations();
                }
            }, 100);
            
            // Initialize modals
            if (window.ClusoModal) {
                this.modules.modal = window.ClusoModal;
                this.modules.modal.initializeModals();
            }
            
            // Setup additional enhancements
            this.setupEnhancements();
            
            // Mark as initialized
            this.isInitialized = true;
            document.body.classList.add('cluso-loaded');
            
            console.log('✅ Cluso Landing Page fully loaded');
            
        } catch (error) {
            console.error('❌ Error initializing Cluso app:', error);
        }
    }
    
    // Additional enhancements
    setupEnhancements() {
        // Viewport change handling
        this.handleViewportChanges();
        
        // Performance optimizations
        this.optimizePerformance();
        
        // Analytics setup (if needed)
        this.setupAnalytics();
        
        // Accessibility enhancements
        this.enhanceAccessibility();
    }
    
    // Handle viewport changes and resize events
    handleViewportChanges() {
        const debouncedResize = this.modules.utils ? 
            this.modules.utils.debounce(() => {
                console.log('Viewport resized:', window.innerWidth, 'x', window.innerHeight);
                
                // Reinitialize parallax if screen size changes significantly
                if (window.innerWidth >= 768 && this.modules.animations) {
                    this.modules.animations.setupParallaxEffects();
                }
            }, 250) : null;
        
        if (debouncedResize) {
            window.addEventListener('resize', debouncedResize);
        }
    }
    
    // Performance optimizations
    optimizePerformance() {
        // Lazy load images that are not immediately visible
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Preload critical resources
        this.preloadCriticalResources();
    }
    
    // Preload critical resources
    preloadCriticalResources() {
        // Preload hero banner image if not already loaded
        const heroBanner = document.querySelector('.banner-image');
        if (heroBanner && heroBanner.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = heroBanner.src;
            link.as = 'image';
            document.head.appendChild(link);
        }
        
        // Preload app store badge
        const badge = document.querySelector('.app-store-badge');
        if (badge && badge.src) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = badge.src;
            link.as = 'image';
            document.head.appendChild(link);
        }
    }
    
    // Setup analytics (Firebase Analytics integration ready)
    setupAnalytics() {
        // Firebase Analytics can be initialized here
        // Example: firebase.analytics();
        
        // Track page view
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'Cluso Landing Page',
                page_location: window.location.href
            });
        }
    }
    
    // Enhance accessibility
    enhanceAccessibility() {
        // Add skip link for keyboard navigation
        this.addSkipLink();
        
        // Enhance focus management
        this.enhanceFocusManagement();
        
        // Add ARIA labels where needed
        this.addAriaLabels();
    }
    
    // Add skip navigation link
    addSkipLink() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--complementary-color);
            color: var(--text-primary);
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            font-weight: 600;
            z-index: 1000;
            transition: top 0.2s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content ID if not exists
        const mainContent = document.querySelector('main') || document.querySelector('.hero');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }
    
    // Enhance focus management
    enhanceFocusManagement() {
        // Trap focus in modals when they're open
        document.addEventListener('keydown', (e) => {
            const modal = document.querySelector('.screenshot-modal');
            if (modal && e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                if (focusableElements.length > 0) {
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey && document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    } else if (!e.shiftKey && document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
    
    // Add ARIA labels where needed
    addAriaLabels() {
        // Add labels to navigation elements
        const downloadBtns = document.querySelectorAll('.download-btn');
        downloadBtns.forEach(btn => {
            if (!btn.getAttribute('aria-label')) {
                btn.setAttribute('aria-label', 'Download Cluso game from App Store');
            }
        });
        
        // Add landmark roles
        const hero = document.querySelector('.hero');
        if (hero) hero.setAttribute('role', 'banner');
        
        const footer = document.querySelector('.footer');
        if (footer) footer.setAttribute('role', 'contentinfo');
    }
}

// Initialize the application
const clusoApp = new ClusoApp();

// Auto-initialize when script loads
clusoApp.init();

// Make app available globally for debugging
window.ClusoApp = clusoApp;

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}
