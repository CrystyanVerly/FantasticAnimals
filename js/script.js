// Navegação por Tabs
function initTabNav() {
  const _tabMenu = document.querySelectorAll(".js-tabMenu li");
  const _tabContent = document.querySelectorAll(".js-tabContent section");

  if (_tabMenu.length && _tabContent.length) {
    _tabContent[0].classList.add("active");

    function activeTab(index) {
      _tabContent.forEach((item) => {
        item.classList.remove("active");
      });
      _tabContent[index].classList.add("active");
    }

    _tabMenu.forEach((li, i) => {
      li.addEventListener("click", function () {
        activeTab(i);
      });
    });
  }
}
initTabNav();

// Accordion List
function initAccordionList() {
  const _accordionList = document.querySelectorAll(".js-accordion dt");
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
initAccordionList();
