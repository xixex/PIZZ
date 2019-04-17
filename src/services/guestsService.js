export const fetchGuests = () => {
  return fetch("https://gp-js-test.herokuapp.com/pizza")
    .then(response => response.json())
    .then(data => data["party"]);
};

export const calculatePizzaEaters = guests =>
  guests.filter(g => g.eatsPizza).length;

export const calculateAllGuests = guests => guests.length;
