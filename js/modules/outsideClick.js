export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outSide = "data-outside";

  function handleOutSideClick(e) {
    if (!element.contains(e.target)) {
      element.removeAttribute(outSide);
      events.forEach((eventUser) => {
        html.removeEventListener(eventUser, handleOutSideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outSide)) {
    events.forEach((eventUser) => {
      setTimeout(() => html.addEventListener(eventUser, handleOutSideClick));
    });
    element.setAttribute(outSide, "");
  }
}
