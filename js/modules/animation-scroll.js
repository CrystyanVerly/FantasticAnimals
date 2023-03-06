export default function initScrollAnimation() {
  const _sections = document.querySelectorAll("[data-anima='scroll']");

  if (_sections.length) {
    const _calcWindowHeight = window.innerHeight * 0.6;

    function scrollAnimation() {
      _sections.forEach((section) => {
        const _sectionTop = section.getBoundingClientRect().top;
        const _isSectionVisible = _sectionTop - _calcWindowHeight < 0;

        if (_isSectionVisible) {
          section.classList.add("active");
        }
      });
    }
    scrollAnimation();
    window.addEventListener("scroll", scrollAnimation);
  }
}
