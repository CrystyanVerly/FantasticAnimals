export default function initCompanyOperation() {
  const operation = document.querySelector("[data-week]");
  const weekDays = operation.dataset.week.split(",").map(Number);
  const weekHour = operation.dataset.hour.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = weekDays.indexOf(dayNow) !== -1;
  const openHour = hourNow >= weekHour[0] && hourNow < weekHour[1];

  if (weekOpen && openHour) {
    operation.classList.add("open");
  }
}
