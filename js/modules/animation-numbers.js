export default function initAnimationNumber() {
  function animaNumbers() {
    const numbers = document.querySelectorAll("[data-num]");

    numbers.forEach((num) => {
      const total = +num.innerText;
      const increment = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        num.innerText = start;

        if (start > total) {
          num.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("active")) {
      observer.disconnect();
      animaNumbers();
    }
  }

  observer = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numbers");

  observer.observe(observerTarget, { attributes: true });
}
