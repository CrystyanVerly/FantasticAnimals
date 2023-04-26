import outsideClick from "./outSideClick.js";

export default class MenuDropDown {
  constructor(menus, events) {
    this.dropDownMenus = document.querySelectorAll(menus);
    this.activeClass = "active";

    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown(e) {
    e.preventDefault();
    const element = e.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addEventDropDown() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((eventUser) => {
        menu.addEventListener(eventUser, this.activeDropDown);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) this.addEventDropDown();
    return this;
  }
}
