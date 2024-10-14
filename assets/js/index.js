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
