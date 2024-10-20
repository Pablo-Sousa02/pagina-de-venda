// Inicialização do AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Menu Toggle Mobile
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}


// Scroll Suave para Links Internos
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load the theme from localStorage if it exists
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    }

    // Toggle theme when the button is clicked
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update the button text based on the current theme
        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
