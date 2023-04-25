import debounce from "./debounce.js";

export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.calcWindowHeight = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 10);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offSet = section.offsetTop;
      return {
        element: section,
        offSet: Math.floor(offSet - this.calcWindowHeight),
      };
    });
  }

  checkDistance() {
    console.log("teste");

    this.distance.forEach((section) => {
      if (window.scrollY > section.offSet) {
        section.element.classList.add("active");
      } else if (section.element.classList.contains("active")) {
        section.element.classList.remove("active");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
