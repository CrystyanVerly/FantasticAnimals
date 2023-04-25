export default class Modal {
  constructor(open, close, container) {
    this.btnModalOpen = document.querySelector(open);
    this.btnModalClose = document.querySelector(close);
    this.modalContainer = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outClickModal = this.outClickModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle("active");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  outClickModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addEventModal() {
    this.btnModalOpen.addEventListener("click", this.eventToggleModal);
    this.btnModalClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.outClickModal);
  }

  init() {
    if (this.btnModalOpen && this.btnModalClose && this.modalContainer) {
      this.addEventModal();
    }
    return this;
  }
}
