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
sr.reveal(`.banner-pd p`, { delay: 100, origin: "left" });
sr.reveal(`.button__floating-wsp`, { delay: 100, origin: "bottom" });


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

/*============= ICON QUESTIONS ===============*/

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Cerrar otros items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle el item actual
        item.classList.toggle('active');
    });
});


/*============= SHOW SCROLL UP ===============*/

const scrollUp = () => {
const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class
window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*============= SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
const scrollDown = window.scrollY;

sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
    ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
        sectionLink.classList.add("active-link");
    } else {
        sectionLink.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
window.addEventListener("load", scrollActive); 

/*============= SCROLL SERVICE ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider-wrapper-1");
    const track = slider.querySelector(".sectors-track");
    const cards = Array.from(slider.querySelectorAll(".sector-card"));
    const nextBtn = slider.querySelector(".button-next");
    const prevBtn = slider.querySelector(".button-prev");

    const totalCards = cards.length;
    let index = totalCards;

    // --- Clonaciones para infinito ---
    cards.forEach(card => {
        const cloneStart = card.cloneNode(true);
        const cloneEnd = card.cloneNode(true);
        track.appendChild(cloneEnd);
        track.insertBefore(cloneStart, track.firstChild);
    });

    // --- Calcular ancho real ---
    function getCardWidth() {
        const card = slider.querySelector(".sector-card");
        return card.getBoundingClientRect().width;
    }

    function init() {
        cardWidth = getCardWidth();
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
    let cardWidth;
    init();

    function moveSlider(direction) {
        if (direction === "next") index++;
        else index--;

        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        track.addEventListener("transitionend", () => {
        if (index >= totalCards * 2 - 3) { // siempre basado en 3 visibles
            track.style.transition = "none";
            index = totalCards;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
        if (index <= 2) {
            track.style.transition = "none";
            index = totalCards;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
        }, { once: true });
    }

    nextBtn.addEventListener("click", () => moveSlider("next"));
    prevBtn.addEventListener("click", () => moveSlider("prev"));
    window.addEventListener("resize", init);
});


/*============= SCROLL NOTICIAS ===============*/

document.addEventListener("DOMContentLoaded", () => {
const sliders = document.querySelectorAll(".slider-wrapper");

    sliders.forEach((slider) => {
        const track = slider.querySelector(".sectors-track");
        const originalCards = Array.from(slider.querySelectorAll(".sector-card"));
        const nextBtn = slider.querySelector(".button-next");
        const prevBtn = slider.querySelector(".button-prev");

        const slidesToShow = 3;
        const totalCards = originalCards.length;
        let index = totalCards;
        let cardWidth;

        // --- Clonamos solo los originales ---
        originalCards.forEach((card) => {
        const cloneStart = card.cloneNode(true);
        const cloneEnd = card.cloneNode(true);
        track.appendChild(cloneEnd);
        track.insertBefore(cloneStart, track.firstChild);
        });

        // --- Calcular ancho ---
        function getCardWidth() {
        const card = slider.querySelector(".sector-card");
        return card.getBoundingClientRect().width;
        }

        function init() {
        cardWidth = getCardWidth();
        track.style.transition = "none";
        track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
        init();

        function moveSlider(direction) {
        if (direction === "next") {
            index++;
        } else {
            index--;
        }

        track.style.transition = "transform 0.6s ease";
        track.style.transform = `translateX(-${index * cardWidth}px)`;

        track.addEventListener(
            "transitionend",
            () => {
            if (index >= totalCards * 2) {
                track.style.transition = "none";
                index = totalCards;
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            }
            if (index <= totalCards - slidesToShow) {
                track.style.transition = "none";
                index = totalCards;
                track.style.transform = `translateX(-${index * cardWidth}px)`;
            }
            },
            { once: true }
        );
        }

        nextBtn.addEventListener("click", () => moveSlider("next"));
        prevBtn.addEventListener("click", () => moveSlider("prev"));

        window.addEventListener("resize", init);
    });
});


/*============= SCROLL TESTIMONIALS ===============*/

document.addEventListener("DOMContentLoaded", () => {
    const trackTesti = document.querySelector(".testimonial-cards");
    const cardsTesti = document.querySelectorAll(".testimonial-card");
    const totalTesti = cardsTesti.length;
    const visibleTesti = 2;
    let indexTesti = 0;

    // Clonar los primeros para el loop infinito
    cardsTesti.forEach(card => {
        const clone = card.cloneNode(true);
        trackTesti.appendChild(clone);
    });

    // Calcular el ancho real del card (incluye gap)
    const cardWidth = cardsTesti[0].offsetWidth + 32; // 32px = gap de 2rem

    function moveTestiSlider() {
        indexTesti++;
        trackTesti.style.transition = "transform 0.8s ease-in-out";
        trackTesti.style.transform = `translateX(-${cardWidth * indexTesti}px)`;

        // Reinicio suave
        if (indexTesti >= totalTesti) {
        setTimeout(() => {
            trackTesti.style.transition = "none";
            trackTesti.style.transform = "translateX(0)";
            indexTesti = 0;
        }, 850);
        }
    }

    setInterval(moveTestiSlider, 3000);
});