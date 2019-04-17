const createPizza = pizzaPieces => {
  const sliceDeg = 360 / pizzaPieces;
  const pizza = document.createElement("div");
  pizza.className = "pizza";

  for (let i = 0, deg = 0; i < pizzaPieces; i++, deg += sliceDeg) {
    const peace = document.createElement("div");
    peace.className = "peace";
    peace.style.transform = `rotate(${deg}deg)`;
    pizza.appendChild(peace);
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
