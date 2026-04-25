const siteConfig = {
  name: "Stadin Fixarit Oy",
  email: "info@stadin-fixarit.fi",
  phone: "+358 46 803 6951",
  city: "Helsinki"
};
document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    if (hamburger && menu && overlay) {

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            menu.classList.remove("active");
            overlay.classList.remove("active");
        });

        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
                overlay.classList.remove("active");
            });
        });
    }

    // FORM
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            alert("Kiitos! Viesti on lähetetty.");
        });
    }

});
