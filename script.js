// ================================
// Typing Animation
// ================================

const typing = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "Python Developer",
    "Frontend Developer",
    "Flask Developer",
    "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================================
// Scroll Progress Bar
// ================================

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";
});


// ================================
// Back To Top Button
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.style.display = "none";

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// Active Navbar Link
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ================================
// Mobile Menu
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});


// ================================
// Reveal Animation
// ================================

const revealElements = document.querySelectorAll(
    ".hero-text,.hero-image,.about-container,.skill-card,.project-card,.certificate-card,.timeline-item,.contact-container"
);

function reveal() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// Navbar Background Change
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 60) {

        header.style.background = "rgba(15,23,42,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(0,0,0,.3)";
        header.style.boxShadow = "none";

    }

});