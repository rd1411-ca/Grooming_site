document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Simple animation for hamburger lines can be added here
            hamburger.classList.toggle('open');
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Subtle Parallax Effect for Floating Icons ---
    document.addEventListener('mousemove', (e) => {
        const icons = document.querySelectorAll('.floating-icon');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        icons.forEach((icon, index) => {
            const speed = (index + 1) * 2; // Different speeds for depth
            const moveX = (x * speed);
            const moveY = (y * speed);
            
            // Apply translation while keeping the existing float animation
            // Note: This needs care not to override css animations completely
            // Ideally, wrap the icon in a div: div handles hover, img handles CSS float
        });
    });
});
