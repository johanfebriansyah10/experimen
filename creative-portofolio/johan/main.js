const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");

const desktopMatches = window.matchMedia("(min-width: 768px)");

function closeMobileMenu() {
    navMenu.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Buka navigasi utama");
}

hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Tutup navigasi utama" : "Buka navigasi utama");
})

desktopMatches.addEventListener("change", () => {
    closeMobileMenu();
})

document.querySelectorAll(".nav-link, .btn-cta").forEach((link) => {
    link.addEventListener("click", () => {
        if (!desktopMatches) {
            closeMobileMenu()
        }
    })
})

document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target)
    const clickedInsideHamburger = hamburger.contains(event.target)

    if (!clickedInsideMenu && !clickedInsideHamburger) {
        closeMobileMenu()
    }
})