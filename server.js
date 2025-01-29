document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".toggle-button");
    const body = document.body;

    // Apply stored dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Toggle dark mode on click
    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
});
