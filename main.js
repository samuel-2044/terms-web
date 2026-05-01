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