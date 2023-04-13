export default function initFetchBTC() {
  function fetchBtc() {
    fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((btc) => {
        const sellBTC = (1000 / btc.BRL.sell).toFixed(4);
        const btcPrice = document.querySelector(".btc-price");

        btcPrice.innerText = sellBTC;

        setInterval(() => {
          btcPrice.innerText = sellBTC;
        }, 1000 * 30);
      })
      .catch((error) => {
        console.log(Error(error));
      });
  }
  fetchBtc();
}
