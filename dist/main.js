import MenuMobile from "./MenuMobile.js";
import ScrollToSection from "./ScrollToSection.js";
import ScrollAnimate from "./ScrollAnimate.js";
const menuMobile = new MenuMobile('[data-menu^="button"]', '[data-menu^="menu"]');
menuMobile.init();
const scrollToSection = new ScrollToSection('[data-menu^="menu"]', '[data-menu^="button"]');
scrollToSection.init();
const scrollAnimate = new ScrollAnimate("[data-animate]");
scrollAnimate.init();
//# sourceMappingURL=main.js.map