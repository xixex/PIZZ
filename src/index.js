import "./styles.scss";
import button from "./button";
import renderPizza from "./pizza";

document.getElementById("root").appendChild(button("Load", renderPizza));
