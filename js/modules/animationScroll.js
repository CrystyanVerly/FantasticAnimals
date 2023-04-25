export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anima='scroll']");

  function scrollAnimation() {
    sections.forEach((section) => {
      const calcWindowHeight = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - calcWindowHeight < 0;

      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  }

  if (sections.length) {
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }
}
