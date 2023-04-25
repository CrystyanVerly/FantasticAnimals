export default function fetchBTC(url, target) {
  function fetchBtc() {
    fetch(url)
      .then((response) => response.json())
      .then((btc) => {
        const sellBTC = (1000 / btc.BRL.sell).toFixed(4);
        const btcPrice = document.querySelector(target);

        btcPrice.innerText = sellBTC;

        setInterval(() => {
          btcPrice.innerText = sellBTC;
        }, 1000 * 30);
      })
      .catch((error) => {
        console.log(Error(error));
      });
  }
  return fetchBtc();
}
