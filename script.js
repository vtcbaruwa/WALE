// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling function
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

    // Attach smooth scrolling to button
    document.querySelector("button").addEventListener("click", function () {
        scrollToSection("about");
    });

    // Form submission effect
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        this.reset();
    });
});
