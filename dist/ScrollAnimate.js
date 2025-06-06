export default class ScrollAnimate {
    elementsList;
    activeClass;
    observer;
    constructor(elementsSelector, activeClass = 'active') {
        this.elementsList = [...document.querySelectorAll(elementsSelector)];
        this.activeClass = activeClass;
        this.callback = this.callback.bind(this);
        this.observer = new IntersectionObserver(this.callback, {
            root: null,
            threshold: 0.25,
            rootMargin: "0px 0px -100px 0px"
        });
    }
    callback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.25) {
                console.log(this.activeClass);
                entry.target.classList.add(this.activeClass);
            }
            else {
                entry.target.classList.remove(this.activeClass);
            }
        });
    }
    init() {
        if (!this.elementsList)
            return;
        this.elementsList.forEach((el) => this.observer.observe(el));
    }
}
//# sourceMappingURL=ScrollAnimate.js.map