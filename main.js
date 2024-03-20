AOS.init();

AOS.init({
    offset: 200,
    duration: 700,
    easing: 'ease-in-sine',
    delay: 100,
});

document.addEventListener("DOMContentLoaded", () => {

    // Get the document's root styles
    const rootStyles = getComputedStyle(document.documentElement);
    
    const colorBrand = rootStyles.getPropertyValue("--color-brand");

    let skillBox1 = document.querySelector(".skill-box-1");
    let algorithmIcon1 = document.querySelector(".la-sitemap");
    let skillBox2 = document.querySelector(".skill-box-2");
    let algorithmIcon2 = document.querySelector(".la-code");
    let skillBox3 = document.querySelector(".skill-box-3");
    let algorithmIcon3 = document.querySelector(".la-database");

    const emailClipboard = document.getElementById("email-clipboard");
    const emailEnvelope = document.getElementById("email-envelope");
    const emailCheck = document.getElementById("email-check");

    // Skill box 1 icon glow on hover
    skillBox1.addEventListener("mouseenter", () => {
        algorithmIcon1.style.color = colorBrand;
    });

    skillBox1.addEventListener("mouseleave", () => {
        algorithmIcon1.style.color = "";
    });

    // Skill box 2 icon glow on hover
    skillBox2.addEventListener("mouseenter", () => {
        algorithmIcon2.style.color = colorBrand;
    });

    skillBox2.addEventListener("mouseleave", () => {
        algorithmIcon2.style.color = "";
    });

    // Skill box 3 icon glow on hover
    skillBox3.addEventListener("mouseenter", () => {
        algorithmIcon3.style.color = colorBrand;
    });

    skillBox3.addEventListener("mouseleave", () => {
        algorithmIcon3.style.color = "";
    });

    // Copy email to clipboard
    emailClipboard.addEventListener("click", () => {
        navigator.clipboard.writeText("clivejyonilcolaco@trentu.ca");
        showCopyPopup();
    });

    function showCopyPopup() {
        emailCheck.classList.remove("d-none");
        emailEnvelope.classList.add("d-none");
    
        setTimeout(() => {
            emailCheck.classList.add("d-none");
            emailEnvelope.classList.remove("d-none");
        }, 2000);
    }
});
