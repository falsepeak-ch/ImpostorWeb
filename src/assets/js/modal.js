/*
 * Modal functionality for screenshots and interactive elements
 */

// Screenshot modal for better viewing
function enhanceScreenshots() {
    const screenshots = document.querySelectorAll('.screenshot');
    
    screenshots.forEach(img => {
        img.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });
        
        // Add cursor pointer and title
        img.style.cursor = 'pointer';
        img.title = 'Click to view larger image';
    });
}

// Create and show modal
function openModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'screenshot-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', alt);
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--z-modal);
        opacity: 0;
        transition: opacity 0.3s ease;
        backdrop-filter: blur(5px);
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: var(--border-radius-lg);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        transform: scale(0.8);
        transition: transform 0.3s ease;
        border: 3px solid var(--complementary-color);
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;
    closeBtn.setAttribute('aria-label', 'Close modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: var(--gradient-complementary);
        border: none;
        color: var(--text-primary);
        font-size: 1.5rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        backdrop-filter: blur(10px);
        transition: var(--transition);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-lg);
    `;
    
    closeBtn.querySelector('svg').style.cssText = `
        width: 24px;
        height: 24px;
    `;
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.transform = 'scale(1.1)';
        closeBtn.style.background = 'var(--gradient-accent)';
        closeBtn.style.color = 'white';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.transform = 'scale(1)';
        closeBtn.style.background = 'var(--gradient-complementary)';
        closeBtn.style.color = 'var(--text-primary)';
    });
    
    function closeModal() {
        modal.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        document.body.style.overflow = '';
        document.body.removeAttribute('aria-hidden');
        
        setTimeout(() => {
            if (modal.parentNode) {
                document.body.removeChild(modal);
            }
        }, 300);
        
        // Return focus to the clicked image
        const originalImg = document.querySelector(`[src="${src}"]`);
        if (originalImg) {
            originalImg.focus();
        }
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Keyboard navigation
    const handleKeydown = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleKeydown);
        }
    };
    document.addEventListener('keydown', handleKeydown);
    
    // Build and show modal
    modal.appendChild(img);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Prevent scrolling and hide content from screen readers
    document.body.style.overflow = 'hidden';
    document.body.setAttribute('aria-hidden', 'true');
    
    // Animate in
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });
    
    // Focus management
    closeBtn.focus();
}

// Initialize modal functionality
function initializeModals() {
    enhanceScreenshots();
}

// Export for main app
window.ClusoModal = {
    enhanceScreenshots,
    openModal,
    initializeModals
};
