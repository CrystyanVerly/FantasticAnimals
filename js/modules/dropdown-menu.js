import $outSideClick from "./outSideClick.js";

export default function initMenuDropDown() {
  const _dropDownMenus = document.querySelectorAll("[data-dropdown]");
  const _events = ["touchstart", "click"];

  function $handleClick(e) {
    e.preventDefault();
    this.classList.toggle("active");
    $outSideClick(this, _events, () => {
      this.classList.remove("active");
    });
  }

  _dropDownMenus.forEach((menu) => {
    _events.forEach((eventUser) => {
      menu.addEventListener(eventUser, $handleClick);
    });
  });
}
