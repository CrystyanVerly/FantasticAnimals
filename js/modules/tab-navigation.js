export default function initTabNav() {
  const _tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const _tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (_tabMenu.length && _tabContent.length) {
    _tabContent[0].classList.add("active");

    function activeTab(index) {
      _tabContent.forEach((item) => {
        item.classList.remove("active");
      });
      const $dataDirection = _tabContent[index].dataset.anima;
      _tabContent[index].classList.add("active", $dataDirection);
    }

    _tabMenu.forEach((li, i) => {
      li.addEventListener("click", function () {
        activeTab(i);
      });
    });
  }
}
