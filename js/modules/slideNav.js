import Slide from "./slideStructure.js";

export default class SlideNav extends Slide {
  constructor(wrapper, slide) {
    super(wrapper, slide);
    this.bindEventsPaging();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    control.classList.add("tab-slide-nav");

    this.arrSlide.forEach((index) => {
      control.innerHTML += `<li><a href='#slide${index + 1}'></a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });

    this.wrapper.addEventListener("changeEvent", this.activeControlItem);
  }

  activeControlItem() {
    this.arrControl.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.arrControl[this.index.active].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.createControl();
    this.arrControl = [...this.control.children];
    this.activeControlItem();
    this.arrControl.forEach(this.eventControl);
  }

  bindEventsPaging() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}
