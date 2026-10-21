const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

const desktopQuery = window.matchMedia("(min-width: 768px)");

function closeMobileMenu() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka menu utama");
}

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Tutup menu utama" : "Buka menu utama")
})

desktopQuery.addEventListener("change", () => {
    closeMobileMenu();
})

navMenu.querySelectorAll("nav-link, nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
        if (!desktopQuery.matches) {
            closeMobileMenu();
        }
    })
})

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
        closeMobileMenu()
    }
})