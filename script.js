document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Simple animation for hamburger lines
            const spans = hamburger.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Optional: Randomize hero images on load (Bonus) ---
    // If you want the images 1-3 to shuffle positions on refresh:
    /*
    const heroContainer = document.querySelector('.hero-images');
    if (heroContainer) {
        for (let i = heroContainer.children.length; i >= 0; i--) {
            heroContainer.appendChild(heroContainer.children[Math.random() * i | 0]);
        }
    }
    */
});
