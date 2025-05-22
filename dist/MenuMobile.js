export default class MenuMobile {
    buttonMenu;
    menuElement;
    activeClass;
    constructor(buttonSelector, menuSelector, activeClass = "active") {
        this.buttonMenu = document.querySelector(buttonSelector);
        this.menuElement = document.querySelector(menuSelector);
        this.activeClass = activeClass;
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        if (!(this.menuElement instanceof HTMLElement) || !(this.buttonMenu instanceof HTMLElement))
            return;
        this.menuElement.classList.toggle(this.activeClass);
        this.buttonMenu.innerText = (this.menuElement.classList.contains(this.activeClass)) ? "Fechar" : "Menu";
    }
    addEvent() {
        this.buttonMenu?.addEventListener("pointerdown", this.toggleMenu);
    }
    init() {
        console.log(this.menuElement);
        if (this.buttonMenu && this.menuElement) {
            this.addEvent();
        }
    }
}
//# sourceMappingURL=MenuMobile.js.map