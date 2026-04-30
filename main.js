// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Toggle icon ☰ ↔ ✖
    if (navbar.classList.contains("active")) {
        hamburger.textContent = "✖";
    } else {
        hamburger.textContent = "☰";
    }
});

// Close menu when clicking links
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        hamburger.textContent = "☰";
    });
});

// Dropdown mobile toggle
// Toggle only when clicking the dropdown parent anchor, not menu items
document.querySelectorAll(".dropdown > a").forEach(toggle => {
    toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 900) {
            e.preventDefault();
            const drop = toggle.parentElement;
            drop.classList.toggle("open");
        }
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown.open").forEach(drop => {
            drop.classList.remove("open");
        });
    }
});