import createButton from "./button";
import createPizza from "./pizza";
import createGuestsBanner from "./guestsBanner";
import { renderBanner } from "./guestsBanner";
import { renderPizza } from "./pizza";

const createApp = () => {
  const app = document.createElement("div");
  app.className = "app";

  const button = createButton(
    "Load",
    createPizza,
    renderPizza,
    createGuestsBanner,
    renderBanner
  );

  app.appendChild(button);
  return app;
};

export default createApp;
