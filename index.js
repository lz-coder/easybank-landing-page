const mobile_menu_button = document.querySelector(".mobile-menu-button");
const mobile_menu_button_img = document.querySelector(".mobile-menu-button>img");
const mobile_menu_button_img_default = mobile_menu_button_img.src;
const header_nav = document.getElementById("header_nav");
const intro_mockup_image = document.querySelector(".intro-mockup-image");

mobile_menu_button.addEventListener('click', () => {
    if (!header_nav.classList.contains("responsive")) {
        header_nav.className += " responsive";
        header_nav.style.display = "flex";
        mobile_menu_button_img.setAttribute("src", "images/icon-close.svg");
        intro_mockup_image.style.display = "none";
    } else {
        header_nav.className = "header-nav";
        header_nav.style.display = "none";
        mobile_menu_button_img.setAttribute("src", mobile_menu_button_img_default);
        intro_mockup_image.style.display = "block";
    }
});

