export default class ScrollToSection {
    menuElement;
    menuLinks;
    activeClass;
    buttonMenuElement;
    constructor(menuSelector, buttonMenuSelector, activeClass = 'active') {
        this.menuElement = document.querySelector(menuSelector);
        this.menuLinks = null;
        this.activeClass = activeClass;
        this.scrollTo = this.scrollTo.bind(this);
        this.buttonMenuElement = document.querySelector(buttonMenuSelector);
    }
    setMenuLinks() {
        if (!(this.menuElement instanceof HTMLElement))
            return;
        this.menuLinks = [...this.menuElement.querySelectorAll('a')];
    }
    removeActiveClassMenu() {
        this.menuElement?.classList.remove(this.activeClass);
        if (!(this.buttonMenuElement instanceof HTMLElement))
            return;
        this.buttonMenuElement.innerText = 'Menu';
    }
    calculatePosition(el) {
        if (!(el instanceof HTMLElement))
            return 0;
        return el.getBoundingClientRect().top + window.pageYOffset;
    }
    scrollTo(e) {
        e.preventDefault();
        this.removeActiveClassMenu();
        const element = e.currentTarget;
        if (!(element instanceof HTMLAnchorElement))
            return;
        const sectionId = element.getAttribute('href') ?? '';
        if (!sectionId.startsWith('#'))
            return;
        const section = document.querySelector(sectionId);
        const posicao = this.calculatePosition(section);
        window.scrollTo({
            top: posicao - 80,
            behavior: 'smooth',
        });
    }
    addEvent() {
        this.menuLinks?.forEach((link) => {
            link.addEventListener('click', this.scrollTo);
        });
    }
    init() {
        this.setMenuLinks();
        if (!(this.menuElement instanceof HTMLElement) || !this.menuLinks)
            return this;
        this.addEvent();
        return this;
    }
}
//# sourceMappingURL=ScrollToSection.js.map