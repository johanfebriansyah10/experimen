
"use strict";

// Elemen utama
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");
const navLinks = navMenu.querySelectorAll(".navbar__link");

// Breakpoint harus sama dengan CSS
const mobileBreakpoint = window.matchMedia("(max-width: 768px)");

/**
 * Mengatur kondisi buka/tutup menu.
 */
function setMenuOpen(isOpen) {
    navMenu.classList.toggle("is-open", isOpen);
    navToggle.classList.toggle("is-active", isOpen);

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
}

// Toggle hamburger
navToggle.addEventListener("click", () => {
    const isOpen =
        navToggle.getAttribute("aria-expanded") === "true";

    setMenuOpen(!isOpen);
});

// Tutup menu setelah tautan dipilih
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setMenuOpen(false);

        // Perbarui indikator visual menu aktif
        navLinks.forEach((item) => {
            item.classList.remove("is-active");
            item.removeAttribute("aria-current");
        });

        link.classList.add("is-active");
        link.setAttribute("aria-current", "location");
    });
});

// Tutup menu menggunakan tombol Escape
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        navToggle.getAttribute("aria-expanded") === "true"
    ) {
        setMenuOpen(false);
        navToggle.focus();
    }
});

// Tutup menu jika pengguna mengetuk di luar navbar
document.addEventListener("click", (event) => {
    if (
        mobileBreakpoint.matches &&
        !navbar.contains(event.target)
    ) {
        setMenuOpen(false);
    }
});

// Tutup menu saat berpindah ke tampilan desktop
mobileBreakpoint.addEventListener("change", (event) => {
    if (!event.matches) {
        setMenuOpen(false);
    }
});

// Efek navbar ketika halaman di-scroll
function updateNavbar() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateNavbar, {
    passive: true,
});

// Inisialisasi saat halaman dimuat
updateNavbar();