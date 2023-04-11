import initAnimationNumber from "./animation-numbers.js";

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const _animalsResponse = await fetch(url);
    const _animalsJSON = await _animalsResponse.json();
    const _gridNumbers = document.querySelector(".grid-numbers");

    _animalsJSON.forEach((animal) => {
      const _animalDiv = createAnimals(animal);

      _gridNumbers.appendChild(_animalDiv);
    });
    initAnimationNumber();
  }

  function createAnimals(animal) {
    const _animalNumberContainer = document.createElement("div");
    _animalNumberContainer.classList.add("animal-number");

    _animalNumberContainer.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-num>${animal.total}</span>
    `;

    return _animalNumberContainer;
  }

  fetchAnimals("../../API/amountAnimals.json");
}
