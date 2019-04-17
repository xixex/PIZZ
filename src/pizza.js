const clearPizza = () => {
  let oldPizza = document.querySelector(".pizza");
  if (oldPizza) oldPizza.parentNode.removeChild(oldPizza);
};

const renderPizza = pizzaPieces => {
  clearPizza();
  console.log(pizzaPieces);
  const sliceDeg = 360 / pizzaPieces;
  const pizza = document.createElement("div");
  pizza.className = "pizza";
  for (let i = 0, deg = 0; i < pizzaPieces; i++, deg += sliceDeg) {
    let peace = document.createElement("div");
    peace.className = "peace";
    peace.style.transform = `rotate(${deg}deg)`;
    pizza.appendChild(peace);
  }
  console.log(pizza);
  document.getElementById("root").appendChild(pizza);
};
export default renderPizza;
