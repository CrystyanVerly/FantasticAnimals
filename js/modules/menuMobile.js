import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {}

const _menuButton = document.querySelector('[data-menu="button"]');
const _menuList = document.querySelector('[data-menu="list"]');
const _events = ["click", "touchstart"]

function openMenu() {
  _menuList.classList.add("active");
  _menuButton.classList.add("active");
  outsideClick(_menuList, _events, () => {
    _menuList.classList.remove("active");
    _menuButton.classList.remove("active");
  })
}

_events.forEach((userEvents) => {
  _menuButton.addEventListener(userEvents, openMenu);
})

