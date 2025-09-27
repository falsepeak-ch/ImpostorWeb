/*
 * Utility functions for Cluso Landing Page
 */

// Track download button clicks for analytics
function trackDownload(source) {
    console.log(`Download clicked from: ${source}`);
    
    // Add visual feedback
    const button = event.target.closest('a');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
    
    // Send to analytics (Firebase Analytics can be added here)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download_click', {
            'source': source,
            'event_category': 'engagement'
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance monitoring
function monitorPerformance() {
    if (window.performance && window.performance.getEntriesByType) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page load time:', Math.round(perfData.loadEventEnd - perfData.loadEventStart), 'ms');
                }
            }, 0);
        });
    }
}

// Export functions for use in other modules
window.ClusoUtils = {
    trackDownload,
    setupSmoothScroll,
    debounce,
    throttle,
    monitorPerformance
};
