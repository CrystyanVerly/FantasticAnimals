export default function initModal() {
  const btnModalLogin = document.querySelector("[data-modal='open']");
  const btnModalClose = document.querySelector("[data-modal='close']");
  const modalContainer = document.querySelector("[data-modal='container']");

  function openModal() {
    btnModalLogin.addEventListener("click", (e) => {
      e.preventDefault();
      modalContainer.classList.add("active");
    });
  }

  function outClickModal(e) {
    if (e.target === this) {
      modalContainer.classList.remove("active");
    }
  }

  function closeBtnModal() {
    const outClickModalContainer =
      document.querySelector(".modal").parentElement;

    btnModalClose.addEventListener("click", (e) => {
      e.preventDefault();
      modalContainer.classList.remove("active");
    });
    outClickModalContainer.addEventListener("click", outClickModal);
  }

  if (btnModalLogin && btnModalClose && modalContainer) {
    openModal();
    closeBtnModal();
  }
}
