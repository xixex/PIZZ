const createGuestsBanner = (eatersNumber, guestsNumber) => {
  const banner = document.createElement("div");
  banner.className = "banner";

  const guests = document.createElement("div");
  guests.className = "banner__guests";
  guests.innerText = `Total guests: ${guestsNumber}`;

  const eaters = document.createElement("div");
  eaters.className = "banner__eaters";
  eaters.innerText = `Pizza eaters: ${eatersNumber}`;

  banner.appendChild(guests);
  banner.appendChild(eaters);

  return banner;
};

const clearBanner = () => {
  const oldBanner = document.querySelector(".banner");
  if (oldBanner) {
    oldBanner.parentNode.removeChild(oldBanner);
  }
};

export const renderBanner = banner => {
  clearBanner();
  document.getElementById("root").appendChild(banner);
};

export default createGuestsBanner;
