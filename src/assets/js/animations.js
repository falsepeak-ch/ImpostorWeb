/*
 * Animation and scroll effects for Cluso Landing Page
 */

// Intersection Observer for scroll animations
function setupScrollAnimations() {
    // Check if Intersection Observer is supported
    if (!window.IntersectionObserver) {
        console.warn('Intersection Observer not supported');
        return;
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add stagger effect for cards
                if (entry.target.classList.contains('feature-card') || 
                    entry.target.classList.contains('game-card-premium')) {
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.feature, .step-section, .game-card-premium, .screenshot-item, .overview-card, .strategy-item'
    );
    
    animateElements.forEach(el => {
        // Only animate if user hasn't disabled motion
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        observer.observe(el);
    });
}

// Parallax effects for hero section
function setupParallaxEffects() {
    if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // Skip on mobile or if user prefers reduced motion
    }
    
    const floatingElements = document.querySelectorAll('.floating-card, .shape');
    
    const handleScroll = ClusoUtils.throttle(() => {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = scrolled * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// Enhanced hover effects
function setupEnhancedHovers() {
    // Add magnetic effect to buttons
    const buttons = document.querySelectorAll('.download-btn, .btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        button.addEventListener('mousemove', function(e) {
            if (window.innerWidth < 768) return; // Skip on mobile
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Limit the effect
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Typewriter effect for hero title (optional enhancement)
function setupTypewriterEffect() {
    const titleAccent = document.querySelector('.hero-title .title-accent');
    if (!titleAccent) return;
    
    const text = titleAccent.textContent;
    titleAccent.textContent = '';
    titleAccent.style.borderRight = '2px solid #FAC700';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            titleAccent.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                titleAccent.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // Start typewriter effect after a delay
    setTimeout(typeWriter, 500);
}

// Initialize all animations
function initializeAnimations() {
    setupScrollAnimations();
    setupParallaxEffects();
    setupEnhancedHovers();
    
    // Optional: Enable typewriter effect (commented out by default)
    // setupTypewriterEffect();
}

// Export for main app
window.ClusoAnimations = {
    setupScrollAnimations,
    setupParallaxEffects,
    setupEnhancedHovers,
    setupTypewriterEffect,
    initializeAnimations
};
