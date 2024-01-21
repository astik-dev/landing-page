import { checkWebpSupport } from "./modules/_webpSupportChecker.js";
import { toggleBurgerMenu } from "./modules/_burgerMenu.js";



checkWebpSupport();



document.addEventListener("click", e => {

    if (e.target.closest(".header__burger")) {
        toggleBurgerMenu();
    }

});