export default function outSideClick(element, _events, callback) {
  const _html = document.documentElement;
  const _outSide = "data-outside";

  if (!element.hasAttribute(_outSide)) {
    _events.forEach((eventUser) => {
      setTimeout(() =>  _html.addEventListener(eventUser, handleOutSideClick));
    });
    element.setAttribute(_outSide, "");
  }

  function handleOutSideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(_outSide);
      _events.forEach((eventUser) => {
        _html.removeEventListener(eventUser, handleOutSideClick);
      });
      callback();
    }
  }
}
