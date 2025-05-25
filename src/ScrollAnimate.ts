export default class ScrollAnimate {
  private elementsList: Array<Element>;
  private activeClass: string;
  private observer: IntersectionObserver;

  constructor(elementsSelector: string, activeClass: string = 'active') {
    this.elementsList = [...document.querySelectorAll(elementsSelector)];
    this.activeClass = activeClass;
    this.callback = this.callback.bind(this);
    this.observer = new IntersectionObserver(this.callback, {
      root: null,
      threshold: [0, 0.25, 1],
    });
  }

  private callback(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.25) {
        console.log(this.activeClass);
        entry.target.classList.add(this.activeClass);
      } else if (entry.intersectionRatio < 0.25) {
        entry.target.classList.remove(this.activeClass);
      }
    });
  }

  public init() {
    if (!this.elementsList) return;
    this.elementsList.forEach((el) => this.observer.observe(el));
  }
}
