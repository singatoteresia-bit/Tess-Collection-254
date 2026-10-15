
/* Tess Collection - JavaScript */

// Welcome message in the browser console
console.log("Welcome to Tess Collection!");

// Show a welcome message when the website loads
window.addEventListener("DOMContentLoaded", function () {
    console.log("Tess Collection website is ready!");

    // Make navigation links scroll smoothly
    document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
