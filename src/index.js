import "./styles.scss";

document.getElementById("app").innerHTML = `
  <p>wait...</p>
`;

document.getElementById("load-btn").addEventListener("click", () => {
  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then(response => response.json())
    .then(data => console.log(data));
});
