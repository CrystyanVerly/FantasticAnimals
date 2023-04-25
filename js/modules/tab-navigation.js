export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "active";
  }

  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const dataDirection = this.tabContent[index].dataset.anima;
    this.tabContent[index].classList.add(this.activeClass, dataDirection);
  }

  addEventTabNav() {
    this.tabMenu.forEach((li, i) => {
      li.addEventListener("click", () => this.activeTab(i));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addEventTabNav();
    }
  }
}
