import {
  fetchGuests,
  calculatePizzaEaters,
  calculateAllGuests
} from "../services/guestsService";

const createButton = (
  text,
  createPizza,
  renderPizza,
  createGuestsBanner,
  renderBanner
) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerText = text || "Button";

  button.addEventListener("click", () => {
    button.classList.toggle("loading");
    button.innerText = "Waiting...";
    fetchGuests().then(data => {
      button.innerText = text || "Button";
      button.classList.toggle("loading");

      const guestNumber = calculateAllGuests(data);
      const pizzaPieces = calculatePizzaEaters(data);
      const pizza = createPizza(pizzaPieces);
      const banner = createGuestsBanner(pizzaPieces, guestNumber);

      renderPizza(pizza);
      renderBanner(banner);
    });
  });
  return button;
};

export default createButton;
