export default function initModal() {
  const _btnModalLogin = document.querySelector("[data-modal='open']");
  const _btnModalClose = document.querySelector("[data-modal='close']");
  const _modalContainer = document.querySelector("[data-modal='container']");

  if (_btnModalLogin && _btnModalClose && _modalContainer) {
    function openModal() {
      _btnModalLogin.addEventListener("click", function (e) {
        e.preventDefault();
        _modalContainer.classList.add("active");
      });
    }
    openModal();

    function closeBtnModal() {
      const _outClickModal = document.querySelector(".modal").parentElement;

      _btnModalClose.addEventListener("click", function (e) {
        e.preventDefault();
        _modalContainer.classList.remove("active");
      });
      _outClickModal.addEventListener("click", function (e) {
        e.target === this ? _modalContainer.classList.remove("active") : null;
      });
    }
    closeBtnModal();
  }
}
