/* Mont Blanc Expedition - Interactivity */

document.addEventListener('DOMContentLoaded', () => {

    // Reveal Elements on Scroll
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll(
        '.section-title, .overview-grid, .guide-card, .timeline-item, .gear-item, .risk-box, .price-container, .form-container, .regulations .btn'
    );
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = bookingForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'TRANSMITTING APPLICATION...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Application received. Our lead guide will review your experience and contact you within 48 hours regarding your spot on the Mont Blanc expedition.');
                bookingForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

});
