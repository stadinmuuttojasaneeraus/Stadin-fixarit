const siteConfig = {
  name: "Stadin Fixarit Oy",
  email: "info@stadin-fixarit.fi",
  phone: "+358 46 803 6951",
  city: "Helsinki"
};

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================================================
    // 1. HAMBURGERMOBILMENY
    // ==========================================================================
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

        // ==========================================================================
    // 2. FAQ ACCORDION & ROLLOUT LOGIK (SKOTTSÄKRAD)
    // ==========================================================================
    const faqSections = document.querySelectorAll(".faq-section");

    faqSections.forEach(section => {
        const mainToggle = section.querySelector(".faq-main-toggle");
        const rolloutContainer = section.querySelector(".faq-rollout-container");
        const items = section.querySelectorAll(".faq-item");
        const oldButton = section.querySelector(".js-faq-toggle");

        // FIX 1: Om huvudknappen finns, styr vi hela containern oberoende av ordning
        if (mainToggle && rolloutContainer) {
            mainToggle.addEventListener("click", function() {
                this.classList.toggle("is-open");
                rolloutContainer.classList.toggle("is-open");
            });

            // Tvinga alla frågor att bli redo inuti den dolda containern
            items.forEach(item => item.classList.add("visible"));
        } else {
            // FIX 2: Gamla logiken körs BARA om huvudknappen saknas på sidan
            const limit = parseInt(section.dataset.faq) || 4;
            items.forEach((item, index) => {
                if (index < limit) item.classList.add("visible");
            });
            if (oldButton && items.length <= limit) {
                oldButton.style.display = "none";
            }
        }

        // FIX 3: Öppna/stäng individuella svar när man klickar på en fråga
        items.forEach(item => {
            const question = item.querySelector(".faq-question");
            if (!question) return;

            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });
    });
  
    // ==========================================================================
    // 3. UNIVERSELL SMART SLIDER
    // ==========================================================================
    const universalSliders = document.querySelectorAll(".universal-slider-section");

    universalSliders.forEach(slider => {
        let index = 0;
        const track = slider.querySelector(".slider-track");
        const items = slider.querySelectorAll(".slider-item");
        const nextBtn = slider.querySelector(".slider-btn.next");
        const prevBtn = slider.querySelector(".slider-btn.prev");

        if (track && items.length && nextBtn && prevBtn) {
            function updateSlider() {
                track.style.transform = `translateX(-${index * 100}%)`;
            }

            nextBtn.addEventListener("click", () => {
                index = (index + 1) % items.length;
                updateSlider();
            });

            prevBtn.addEventListener("click", () => {
                index = (index - 1 + items.length) % items.length;
                updateSlider();
            });
        }
    });

    // ==========================================================================
    // 4. KONTAKTFORMULÄR TRIGGER
    // ==========================================================================
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            // Förhindrar omladdning om du vill hantera det via AJAX framöver
            alert("Kiitos! Viesti on lähetetty.");
        });
    }

    // ==========================================================================
    // 5. UNIVERSELL "LUE LISÄÄ" EXPAND-FUNKTION
    // ==========================================================================
    const universalTriggers = document.querySelectorAll(".universal-trigger");

    universalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const expandContent = this.previousElementSibling;

            if (expandContent && expandContent.classList.contains("universal-expand-content")) {
                expandContent.classList.toggle("is-expanded");
                this.classList.toggle("is-active");

                if (expandContent.classList.contains("is-expanded")) {
                    this.innerHTML = "Sulje ";
                } else {
                    this.innerHTML = "Lue lisää ";
                }
            }
        });
    });

    // ==========================================================================
    // 6. MJUK SCROLL TILL TJÄNSTER (PALVELUT)
    // ==========================================================================
    const scrollTrigger = document.getElementById('scroll-trigger');
    const scrollTarget = document.getElementById('palvelut');

    if (scrollTrigger && scrollTarget) {
        scrollTrigger.addEventListener('click', function () {
            scrollTarget.scrollIntoView({ behavior: 'smooth' });
        });
    }

}); // SLUTET PÅ DOMCONTENTLOADED
