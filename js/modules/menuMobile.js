import outsideClick from "./outSideClick.js";

export default class MenuMobile {
  constructor(btn, list, events) {
    this.menuButton = document.querySelector(btn);
    this.menuList = document.querySelector(list);
    this.activeClass = "active";

    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addEventMenuMBL() {
    this.events.forEach((userEvents) => {
      this.menuButton.addEventListener(userEvents, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenuMBL();
    }
    return this;
  }
}
