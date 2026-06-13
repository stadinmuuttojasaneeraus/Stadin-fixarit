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
    // 2. FAQ ACCORDION (VISA MER / VISA MINDRE FRÅGOR)
    // ==========================================================================
    const faqSections = document.querySelectorAll(".faq-section");

    faqSections.forEach(section => {

        const items = section.querySelectorAll(".faq-item");
        const button = section.querySelector(".js-faq-toggle");

        if (!items.length) return;

        const limit = parseInt(section.dataset.faq) || 4;
        let expanded = false;

        items.forEach((item, index) => {
            if (index < limit) {
                item.classList.add("visible");
            }
        });

        if (button && items.length <= limit) {
            button.style.display = "none";
        }

        if (button) {
            button.addEventListener("click", () => {

                expanded = !expanded;

                items.forEach((item, index) => {

                    if (expanded) {
                        item.classList.add("visible");
                        button.textContent = "Näytä vähemmän";
                    } else {
                        if (index >= limit) {
                            item.classList.remove("visible");
                            item.classList.remove("active");
                        }
                        button.textContent = "Näytä lisää kysymyksiä";
                    }

                });

            });
        }

        items.forEach(item => {
            const question = item.querySelector(".faq-question");

            if (!question) return;

            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });

    });

    // ==========================================================================
    // 3. BEFORE / AFTER SLIDER
    // ==========================================================================
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

    // ==========================================================================
    // 3B. PORTFOLIO SLIDER (GALLERIA & TYÖNÄYTTEET) - *NY*
    // ==========================================================================
    const portfolioSection = document.querySelector(".portfolio-section");

    if (portfolioSection) {

        let pIndex = 0;

        const pTrack = portfolioSection.querySelector(".portfolio-track");
        const pItems = portfolioSection.querySelectorAll(".portfolio-item");
        const pNextBtn = portfolioSection.querySelector(".portfolio-btn.next");
        const pPrevBtn = portfolioSection.querySelector(".portfolio-btn.prev");

        if (pTrack && pItems.length && pNextBtn && pPrevBtn) {

            function updatePortfolio() {
                pTrack.style.transform = `translateX(-${pIndex * 100}%)`;
            }

            pNextBtn.addEventListener("click", () => {
                pIndex = (pIndex + 1) % pItems.length;
                updatePortfolio();
            });

            pPrevBtn.addEventListener("click", () => {
                pIndex = (pIndex - 1 + pItems.length) % pItems.length;
                updatePortfolio();
            });

        }
    }

    // ==========================================================================
    // 4. KONTAKTFORMULÄR TRIGGER
    // ==========================================================================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", () => {
            alert("Kiitos! Viesti on lähetetty.");
        });
    }

    // ==========================================================================
    // 5. UNIVERSELL "LUE LISÄÄ" EXPAND-FUNKTION (KORRIGERAD & DIREKT SÖKNING)
    // ==========================================================================
    const universalTriggers = document.querySelectorAll(".universal-trigger");

    universalTriggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            // Letar upp det dolda blocket som ligger direkt innan knappen i HTML
            const expandContent = this.previousElementSibling;

            // Kontrollerar att vi hittat rätt block med klassen universal-expand-content
            if (expandContent && expandContent.classList.contains("universal-expand-content")) {
                expandContent.classList.toggle("is-expanded");
                this.classList.toggle("is-active");

                // Ändrar texten utan att störa FontAwesome-pilen i din CSS
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
