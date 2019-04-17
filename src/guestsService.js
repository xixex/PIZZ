export const fetchGuests = () => {
  return new Promise(resolve => {
    fetch("https://gp-js-test.herokuapp.com/pizza")
      .then(response => response.json())
      .then(data =>
        resolve(data["party"]).catch(e => {
          console.log(e);
        })
      );
  });
};

export const calculatePizzaEaters = guests => {
  return guests.filter(g => g.eatsPizza).length;
};
