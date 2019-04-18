const createPizza = pizzaPieces => {
  const sliceDeg = 360 / pizzaPieces;
  const pizza = document.createElement("div");
  pizza.className = "pizza";

  for (let i = 0, deg = 0; i < pizzaPieces; i++, deg += sliceDeg) {
    const piece = document.createElement("div");
    piece.className = "piece";
    piece.style.transform = `rotate(${deg}deg)`;
    pizza.appendChild(piece);
  }
  return pizza;
};

const clearPizza = () => {
  const oldPizza = document.querySelector(".pizza");
  if (oldPizza) {
    oldPizza.parentNode.removeChild(oldPizza);
  }
};

export const renderPizza = pizza => {
  clearPizza();
  document.querySelector(".app").appendChild(pizza);
};

export default createPizza;
