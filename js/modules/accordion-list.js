export default function initAccordionList() {
  const _accordionList = document.querySelectorAll(
    "[data-anima='accordion'] dt"
  );
  const $activeClass = "active";
  if (_accordionList.length) {
    _accordionList[0].classList.add($activeClass);
    _accordionList[0].nextElementSibling.classList.add($activeClass);

    function activeAccordion() {
      this.classList.toggle($activeClass);
      this.nextElementSibling.classList.toggle($activeClass);
    }

    _accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
