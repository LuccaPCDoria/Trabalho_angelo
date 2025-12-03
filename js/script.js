// ==============================
// Scroll Reveal Animation
// ==============================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ==============================
// MENU MOBILE FIX
// ==============================
const navLinks = document.querySelector(".nav-links");
const toggle = document.querySelector(".mobile-toggle");

// Impede bug no carregamento: sempre começa fechado
navLinks.classList.remove("open");

function toggleMenu() {
    navLinks.classList.toggle("open");
}

// Fecha o menu quando clicar em qualquer link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});

// Evita sobreposição acidental no desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        navLinks.classList.remove("open");
    }
});
