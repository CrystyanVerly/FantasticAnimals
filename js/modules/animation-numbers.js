export default function initAnimationNumber() {
  function animaNumbers() {
    const _numbers = document.querySelectorAll("[data-num]");

    _numbers.forEach((num) => {
      const _total = +num.innerText;
      const _increment = Math.floor(_total / 100);

      let _start = 0;
      const _timer = setInterval(() => {
        _start += _increment;
        num.innerText = _start;

        if (_start > _total) {
          num.innerText = _total;
          clearInterval(_timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      _observer.disconnect();
      animaNumbers();
    }
  }

  const _observer = new MutationObserver(handleMutation);
  const _observerTarget = document.querySelector(".numbers");

  _observer.observe(_observerTarget, { attributes: true });
}
