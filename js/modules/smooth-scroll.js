export default function initSmoothScroll() {
  const innerLink = document.querySelectorAll(
    "[data-menu='link'] a[href^='#']"
  );

  function scrollToSection(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  innerLink.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
