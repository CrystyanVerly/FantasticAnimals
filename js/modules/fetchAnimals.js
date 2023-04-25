import AnimationNumbers from "./animation-numbers.js";

export default function fetchAnimals(url, target) {
  function createAnimals(animal) {
    const animalNumberContainer = document.createElement("div");
    animalNumberContainer.classList.add("animal-number");

    animalNumberContainer.innerHTML = `
    <h3>${animal.specie}</h3>
    <span data-num>${animal.total}</span>
    `;

    return animalNumberContainer;
  }

  const gridNumbers = document.querySelector(target);
  function fillInAnimals(animal) {
    const animalDiv = createAnimals(animal);
    gridNumbers.appendChild(animalDiv);
  }

  function animaNumbersAnimals() {
    const animaNumbers = new AnimationNumbers(
      "[data-num]",
      ".numbers",
      "active"
    );
    animaNumbers.init();
  }

  async function pullAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => fillInAnimals(animal));

      animaNumbersAnimals();
    } catch (error) {
      console.log(error);
    }
  }

  return pullAnimals();
}
