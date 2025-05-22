export default class MenuMobile{
    private buttonMenu: HTMLElement | null;
    private menuElement: HTMLElement | null;
    private activeClass: string;

    constructor(buttonSelector: string, menuSelector: string, activeClass: string = "active"){
        this.buttonMenu = document.querySelector(buttonSelector);
        this.menuElement = document.querySelector(menuSelector);
        this.activeClass = activeClass;
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    private toggleMenu(){
        if(!(this.menuElement instanceof HTMLElement) || !(this.buttonMenu instanceof HTMLElement)) return;
        this.menuElement.classList.toggle(this.activeClass);
        this.buttonMenu.innerText = (this.menuElement.classList.contains(this.activeClass)) ? "Fechar" : "Menu";
    }

    private addEvent(){
        this.buttonMenu?.addEventListener("pointerdown", this.toggleMenu)
    }


    public init(){
        console.log(this.menuElement)
        if(this.buttonMenu && this.menuElement){
            this.addEvent();
        }
    }

}