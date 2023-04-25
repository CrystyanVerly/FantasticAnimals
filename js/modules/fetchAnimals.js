import AnimationNumbers from "./animation-numbers.js";

export default function initFetchAnimals() {
  function createAnimals(animal) {
    const animalNumberContainer = document.createElement("div");
    animalNumberContainer.classList.add("animal-number");

    animalNumberContainer.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-num>${animal.total}</span>
    `;

    return animalNumberContainer;
  }

  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const gridNumbers = document.querySelector(".grid-numbers");

      animalsJSON.forEach((animal) => {
        const animalDiv = createAnimals(animal);

        gridNumbers.appendChild(animalDiv);
      });
      const animaNumbers = new AnimationNumbers(
        "[data-num]",
        ".numbers",
        "active"
      );
      animaNumbers.init();
    } catch (error) {
      console.log(error);
    }
  }

  fetchAnimals("../../API/amountAnimals.json");
}
