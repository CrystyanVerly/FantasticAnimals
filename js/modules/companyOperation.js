export default function initCompanyOperation() {
  const _operation = document.querySelector("[data-week]");
  const _weekDays = _operation.dataset.week.split(",").map(Number);
  const _weekHour = _operation.dataset.hour.split(",").map(Number);

  const _dateNow = new Date();
  const _dayNow = _dateNow.getDay();
  const _hourNow = _dateNow.getHours();

  const _weekOpen = _weekDays.indexOf(_dayNow) !== -1;
  const _openHour = _hourNow >= _weekHour[0] && _hourNow < _weekHour[1];

  if (_weekOpen && _openHour) {
    _operation.classList.add("open");
  }
}
