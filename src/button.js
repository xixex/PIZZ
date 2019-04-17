import { fetchGuests, calculatePizzaEaters } from "./guestsService";
const createButton = (text, renderPizza) => {
  const button = document.createElement("button");
  button.className = "btn btn-load";
  button.innerText = text || "Button";

  button.addEventListener("click", () => {
    button.classList.toggle("loading");
    button.innerHTML = "Waiting...";
    fetchGuests().then(data => {
      button.innerHTML = "Load";
      button.classList.toggle("loading");
      const pizzaPieces = calculatePizzaEaters(data);
      renderPizza(pizzaPieces);
    });
  });
  return button;
};

export default createButton;
