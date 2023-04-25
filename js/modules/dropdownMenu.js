import outsideClick from "./outSideClick.js";

export default function initMenuDropDown() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");
  const events = ["touchstart", "click"];

  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle("active");
    outsideClick(this, events, () => {
      this.classList.remove("active");
    });
  }

  dropDownMenus.forEach((menu) => {
    events.forEach((eventUser) => {
      menu.addEventListener(eventUser, handleClick);
    });
  });
}
