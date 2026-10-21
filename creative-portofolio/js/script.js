const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");

    navMenu.classList.toggle("is-open", !isOpen);
})