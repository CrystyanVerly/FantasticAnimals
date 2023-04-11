export default function initFetchBTC() {
  function fetchBtc() {
    fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((btc) => {
        const _sellBTC = (1000 / btc.BRL.sell).toFixed(4);
        const _btcPrice = document.querySelector(".btc-price");

        _btcPrice.innerText = _sellBTC;

        setInterval(() => {
          _btcPrice.innerText = _sellBTC;
        }, 1000 * 30);
      })
      .catch((error) => {
        console.log(Error(error));
      });
  }
  fetchBtc();
}
