/*============= SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
const spanAnio = document.querySelector(".copyright-anio");

/* menu show */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* menu hidden */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*============= REMOVE MENU MOBILE===============*/
const navLink = document.querySelectorAll(".nav__link");

    const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*============= ADD SHADON HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    // Add class if scroll position is greater than or equal to 50
    window.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

/*============= SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1000,
    delay: 400,
  // reset: true,
});

sr.reveal(`.header`, { delay: 100, origin: "top" });

/*============= SLIDER AUTOMÁTICO + ANIMACIÓN ===============*/
const slides = document.querySelectorAll(".banner-slide");
let index = 0;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active", "animate");
        if (i === n) {
        slide.classList.add("active");
        setTimeout(() => slide.classList.add("animate"), 100); // activa animación del texto
        }
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Cambio automático cada 6 segundos
setInterval(nextSlide, 6000);

// mostrar primero con animación
showSlide(index);
