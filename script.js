/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ========================================
   CLOSE MOBILE MENU
======================================== */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for your message! I'll get back to you soon."
    );

    contactForm.reset();

});

/* =============================
   HERO TYPING EFFECT
============================= */

const typingText = document.getElementById("typing-text");

const titles = [
    "Computer Science Undergraduate",
    "Python Developer",
    "Machine Learning Enthusiast",
    "AI Project Developer"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentTitle = titles[titleIndex];

    if (!deleting) {

        typingText.textContent =
            currentTitle.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentTitle.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingText.textContent =
            currentTitle.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            titleIndex++;

            if (titleIndex === titles.length) {
                titleIndex = 0;
            }
        }
    }

    const typingSpeed = deleting ? 45 : 80;

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();