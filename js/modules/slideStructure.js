import debounce from "./debounce.js";

export default class Slide {
  constructor(wrapper, slide) {
    this.wrapper = document.querySelector(wrapper);
    this.slide = document.querySelector(slide);
    this.distance = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.activeClass = "active";

    this.changeEvent = new Event("changeEvent");
  }

  slideTransition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  moveSlide(distX) {
    this.distance.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
  }

  updatePosition(clientX) {
    this.distance.movement = (this.distance.startX - clientX) * 1.6;
    return this.distance.finalPosition - this.distance.movement;
  }

  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.distance.startX = event.clientX;
      moveType = "mousemove";
    } else {
      this.distance.startX = event.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);

    this.slideTransition(false);
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.updatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    event.preventDefault();
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.distance.finalPosition = this.distance.movePosition;

    this.slideTransition(true);
    this.changeSlideOnEnd();
  }

  changeSlideOnEnd() {
    if (this.distance.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.distance.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addEventSlide() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);

    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  // slide configs
  updateSlidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.arrSlide = [...this.slide.children].map((element) => {
      const positionSlide = this.updateSlidePosition(element);

      return {
        positionSlide,
        element,
      };
    });
  }

  slidesIndexNav(index) {
    const lastSlide = this.arrSlide.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === lastSlide ? undefined : index + 1,
    };
  }

  changeSlide(index) {
    const activeSlide = this.arrSlide[index];
    this.moveSlide(activeSlide.positionSlide);
    this.slidesIndexNav(index);
    this.distance.finalPosition = activeSlide.positionSlide;

    this.changeActiveClass();

    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.arrSlide.forEach((slide) =>
      slide.element.classList.remove(this.activeClass)
    );
    this.arrSlide[this.index.active].element.classList.add(this.activeClass);
  }

  // navigation
  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 200);
  }

  addEventResize() {
    window.addEventListener("resize", this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
  }

  init() {
    this.bindEvents();
    this.slideTransition(true);
    this.addEventSlide();
    this.slidesConfig();
    this.addEventResize();
    this.changeSlide(3);
    return this;
  }
}
