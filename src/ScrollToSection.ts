export default class ScrollToSection {
  private menuElement: HTMLElement | null;
  private menuLinks: Array<HTMLAnchorElement> | null;
  private activeClass: string;
  private buttonMenuElement: HTMLElement | null;

  constructor(
    menuSelector: string,
    buttonMenuSelector: string,
    activeClass: string = 'active',
  ) {
    this.menuElement = document.querySelector(menuSelector);
    this.menuLinks = null;
    this.activeClass = activeClass;
    this.scrollTo = this.scrollTo.bind(this);
    this.buttonMenuElement = document.querySelector(buttonMenuSelector);
  }

  private setMenuLinks(): void {
    if (!(this.menuElement instanceof HTMLElement)) return;
    this.menuLinks = [...this.menuElement.querySelectorAll('a')];
  }

  private removeActiveClassMenu(): void {
    this.menuElement?.classList.remove(this.activeClass);
    if (!(this.buttonMenuElement instanceof HTMLElement)) return;
    this.buttonMenuElement.innerText = 'Menu';
  }


  private calculatePosition<T>(el: T): number {
    if (!(el instanceof HTMLElement)) return 0;
    return el.getBoundingClientRect().top + window.pageYOffset;
  }

  private scrollTo(e: MouseEvent): void {
    e.preventDefault();
    this.removeActiveClassMenu();

    const element = e.currentTarget;
    if (!(element instanceof HTMLAnchorElement)) return;

    const sectionId = element.getAttribute('href') ?? '';
    if (!sectionId.startsWith('#')) return;
    const section = document.querySelector(sectionId);
    const posicao = this.calculatePosition(section);
    window.scrollTo({
      top: posicao - 80,
      behavior: 'smooth',
    });
  }

  private addEvent(): void {
    this.menuLinks?.forEach((link) => {
      link.addEventListener('click', this.scrollTo);
    });
  }

  public init() {
    this.setMenuLinks();
    if (!(this.menuElement instanceof HTMLElement) || !this.menuLinks)
      return this;

    this.addEvent();
    return this;
  }
}
