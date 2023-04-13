export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("active");
    });
    const dataDirection = tabContent[index].dataset.anima;
    tabContent[index].classList.add("active", dataDirection);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");

    tabMenu.forEach((li, i) => {
      li.addEventListener("click", () => {
        activeTab(i);
      });
    });
  }
}
