
// =============================
// 1. DARK AND LIGHT THEME
// =============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem("portfolioTheme", isLight ? "light" : "dark");
});

// Restore saved theme
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
}


// =============================
// 2. MOBILE NAVIGATION
// =============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// =============================
// 3. CURRENT YEAR
// =============================

const footer = document.querySelector("footer p");

footer.textContent =
    `© ${new Date().getFullYear()} Shariffa. All rights reserved.`;

// =============================
// 4. SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .hero-content"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});
