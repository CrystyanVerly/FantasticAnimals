export default function initSmoothScroll() {
  const _innerLink = document.querySelectorAll(
    "[data-menu='link'] a[href^='#']"
  );

  function scrollToSection(e) {
    e.preventDefault();

    const _href = e.currentTarget.getAttribute("href");
    const _section = document.querySelector(_href);

    _section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  _innerLink.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
