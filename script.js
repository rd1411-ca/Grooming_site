/* --- CSS VARIABLES --- */
:root {
    --primary: #6b5c96;       /* Deep Purple */
    --secondary: #d9cae4;     /* Lilac */
    --background: #f7f1e8;    /* Beige */
    --accent: #fad5e2;        /* Pink */
    --neutral: #262626;       /* Dark Gray */
    --white: #ffffff;
    
    --font-heading: 'Passion One', sans-serif;
    --font-body: 'Nunito', sans-serif;
}

/* --- RESET & GLOBAL --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-body);
    background-color: var(--background);
    color: var(--neutral);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4 {
    font-family: var(--font-heading);
    text-transform: uppercase;
    line-height: 1.1;
    color: var(--primary);
}

a {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
}

ul { list-style: none; }

img {
    max-width: 100%;
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

/* --- UTILITY CLASSES --- */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section-padding { padding: 80px 0; }
.text-center { text-align: center; }
.text-accent { color: #d47ea6; }
.text-white { color: var(--white); }
.subhead {
    color: var(--neutral);
    font-weight: bold;
    margin-bottom: 10px;
}
.bottom-margin { margin-bottom: 50px; }
.top-margin { margin-top: 50px; }

/* --- BUTTONS --- */
.btn {
    display: inline-block;
    background-color: var(--primary);
    color: var(--white);
    padding: 12px 30px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    border: 2px solid var(--primary);
    cursor: pointer;
    transition: 0.3s;
}

.btn:hover {
    background-color: transparent;
    color: var(--primary);
}

.btn-neutral {
    background-color: var(--neutral);
    border-color: var(--neutral);
}
.btn-neutral:hover {
    background-color: transparent;
    color: var(--neutral);
}

/* --- NAVBAR --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: var(--background);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 3px solid var(--secondary);
}

.logo {
    font-family: var(--font-heading);
    font-size: 2rem;
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    font-weight: 700;
    font-size: 1.1rem;
}

.nav-links a:hover { color: var(--primary); }

.nav-cta {
    background-color: var(--accent);
    color: var(--neutral);
    border-color: var(--accent);
}

.nav-cta:hover {
    color: var(--neutral);
    background-color: transparent;
}

/* Mobile Hamburger */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background-color: var(--primary);
    transition: 0.3s;
}

/* --- HERO --- */
.hero {
    padding: 100px 20px;
    text-align: center;
    background-color: var(--background);
}

.decorative-text {
    margin-bottom: 20px;
    color: var(--secondary);
    font-weight: bold;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: 5rem;
    margin-bottom: 20px;
}

.hero h1 span {
    color: var(--secondary);
    -webkit-text-stroke: 2px var(--primary);
}

.hero p {
    font-size: 1.5rem;
    max-width: 600px;
    margin: 0 auto 40px auto;
    color: var(--neutral);
}

.hero-images {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
    align-items: center;
}

.hero-img-card {
    width: 200px;
    height: 250px;
    background-color: var(--secondary);
    border-radius: 170px;
    overflow: hidden;
    border: 4px solid var(--neutral);
}

.hero-img-card.center-card {
    width: 250px;
    height: 320px;
    border-color: var(--primary);
    transform: translateY(-20px);
}

/* --- SERVICES --- */
.services { background-color: var(--white); }

.section-header h2 { font-size: 4rem; }

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.service-card {
    background-color: var(--background);
    border-radius: 30px;
    padding: 40px;
    transition: transform 0.3s;
    border: 2px solid var(--secondary);
}

.service-card.alt-bg { background-color: var(--secondary); }

.service-card:hover {
    transform: translateY(-10px);
    background-color: var(--accent);
}

.service-card h3 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.read-more {
    text-decoration: underline;
    font-weight: bold;
    color: var(--primary);
}

/* --- FEATURES --- */
.features { background-color: var(--secondary); }

.features-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.feature-heading {
    font-size: 3.5rem;
    margin-bottom: 40px;
}

.feature-list {
    display: grid;
    gap: 30px;
}

.feature-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.feature-icon {
    width: 60px;
    height: 60px;
    background-color: var(--primary);
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.feature-icon.alt-icon {
    background-color: var(--background);
    color: var(--primary);
}

.feature-text h3 {
    font-size: 2rem;
    margin-bottom: 5px;
}

.stats-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.stats-image-wrapper {
    height: 250px;
    background-color: var(--accent);
    border-radius: 30px;
    overflow: hidden;
    border: 4px solid var(--white);
}

.stat-card {
    background-color: var(--primary);
    color: var(--white);
    padding: 40px;
    border-radius: 30px;
    text-align: center;
}

.stat-card.accent-bg {
    background-color: var(--background);
    color: var(--primary);
}

.stat-card h3 {
    color: inherit;
    font-size: 3rem;
}

/* --- TESTIMONIALS --- */
.testimonials {
    background-color: var(--background);
    overflow: hidden;
}

.ticker-wrapper {
    display: flex;
    gap: 20px;
    width: max-content;
    animation: scroll 20s linear infinite;
}

.ticker-wrapper:hover {
    animation-play-state: paused;
}

.review-card {
    width: 350px;
    background-color: var(--primary);
    color: white;
    padding: 30px;
    border-radius: 30px;
    flex-shrink: 0;
}

.review-card.alt {
    background-color: var(--secondary);
    color: var(--neutral);
}

.review-card h4 {
    color: inherit;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.author {
    margin-top: 15px;
    font-weight: bold;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-1000px); /* Adjust based on width */ }
}

/* --- GALLERY --- */
.gallery-section { background-color: var(--secondary); }
.gallery-title { color: var(--primary); }

.gallery-scroll {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 20px;
    scrollbar-width: none; /* Hide scrollbar Firefox */
}
.gallery-scroll::-webkit-scrollbar { display: none; /* Hide scrollbar Chrome */ }

.gallery-card {
    min-width: 300px;
    height: 400px;
    background: var(--white);
    border-radius: 40px;
    border: 5px solid var(--white);
    overflow: hidden;
}

.gallery-card img {
    border-radius: 35px;
    transition: transform 0.5s;
}

.gallery-card:hover img {
    transform: scale(1.1);
}

/* --- CTA --- */
.cta-box {
    background-color: var(--accent);
    border-radius: 50px;
    padding: 60px;
    text-align: center;
    position: relative;
    overflow: hidden;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cta-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: 1;
}

.cta-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
    margin: 0 auto;
}

.cta-content h2 { margin-bottom: 20px; }
.cta-content p { margin-bottom: 30px; font-size: 1.2rem; }

/* --- FOOTER --- */
footer {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 80px 20px 20px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-bottom: 50px;
}

.footer-col h4 {
    color: var(--accent);
    font-size: 2rem;
    margin-bottom: 20px;
}

.footer-col ul li { margin-bottom: 10px; }
.footer-col ul li a:hover { color: var(--white); }

.footer-img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 20px;
    border: 2px solid var(--accent);
}

.footer-bottom {
    text-align: center;
    opacity: 0.7;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 20px;
}

/* --- RESPONSIVE CSS --- */
@media (max-width: 768px) {
    .navbar { padding: 15px 20px; }
    .nav-links, .nav-cta {
        display: none; /* Hidden on mobile initially */
    }
    
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: var(--background);
        padding: 20px;
        border-bottom: 2px solid var(--secondary);
        align-items: center;
    }

    .hamburger { display: flex; }

    .hero h1 { font-size: 3.5rem; }
    .features-grid { grid-template-columns: 1fr; }
    .hero-img-card { width: 150px; height: 200px; }
    .hero-img-card.center-card { width: 180px; height: 240px; }
}
