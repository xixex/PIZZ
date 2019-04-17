const createPizza = pizzaPieces => {
  const sliceDeg = 360 / pizzaPieces;
  const pizza = document.createElement("div");
  pizza.className = "pizza";

  for (let curDeg = 0; curDeg < 360; curDeg += sliceDeg) {
    let peace = document.createElement("div");
    peace.className = "peace";
    peace.style.transform = `rotate(${curDeg}deg)`;
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
  document.getElementById("root").appendChild(pizza);
};

export default createPizza;
