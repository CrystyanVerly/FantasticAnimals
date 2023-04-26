export default class CompanyOperation {
  constructor(running, activeClass) {
    this.operation = document.querySelector(running);

    if (this.activeClass === undefined) {
      this.activeClass = "open";
    } else {
      this.activeClass = activeClass;
    }
  }

  operationData() {
    this.weekDays = this.operation.dataset.week.split(",").map(Number);
    this.weekHour = this.operation.dataset.hour.split(",").map(Number);
  }

  actualData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }

  isOpen() {
    this.weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;
    this.openHour =
      this.hourNow >= this.weekHour[0] && this.hourNow < this.weekHour[1];

    return this.weekOpen && this.openHour;
  }

  activeOpen() {
    if (this.isOpen()) this.operation.classList.add(this.activeClass);
  }

  init() {
    this.operationData();
    this.actualData();

    if (this.operation) {
      this.activeOpen();
    }
    return this;
  }
}
