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

            document.body.classList.toggle("menu-open");
        });

        overlay.addEventListener("click", () => {

            menu.classList.remove("active");
            overlay.classList.remove("active");

            document.body.classList.remove("menu-open");
        });

        menu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                menu.classList.remove("active");
                overlay.classList.remove("active");

                document.body.classList.remove("menu-open");
            });
        });
    }

    // =========================
    // FAQ (GLOBAL - ALL SITES)
    // =========================
    const faqSections = document.querySelectorAll(".faq-section");

    faqSections.forEach(section => {

        const items = section.querySelectorAll(".faq-item");
        const button = section.querySelector(".js-faq-toggle");

        if (!button || !items.length) return;

        const limit = parseInt(section.dataset.faq) || 3;

        let expanded = false;

        items.forEach((item, index) => {
            if (index < limit) {
                item.classList.add("visible");
            }
        });

        button.addEventListener("click", () => {

            expanded = !expanded;

            items.forEach((item, index) => {
                if (expanded) {
                    item.classList.add("visible");
                    button.textContent = "Näytä vähemmän";
                } else {
                    if (index >= limit) {
                        item.classList.remove("visible");
                    }
                    button.textContent = "Näytä lisää kysymyksiä";
                }
            });
        });
    });

  // =========================
// BEFORE / AFTER SLIDER (SAFE GLOBAL)
// =========================

const baSection = document.querySelector(".ba-section");

if (baSection) {

    let index = 0;

    const track = baSection.querySelector(".ba-track");
    const items = baSection.querySelectorAll(".ba-item");
    const nextBtn = baSection.querySelector(".ba-btn.next");
    const prevBtn = baSection.querySelector(".ba-btn.prev");

    if (track && items.length && nextBtn && prevBtn) {

        function update() {
            track.style.transform = `translateX(-${index * 100}%)`;
        }

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % items.length;
            update();
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + items.length) % items.length;
            update();
        });

    }
}
    // FORM
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", () => {
            alert("Kiitos! Viesti on lähetetty.");
        });
    }

});
