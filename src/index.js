const cocktailURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";

const cocktailInfo = document.querySelector("#detailed-info");

const fetchAll = () => {
  fetch(`${cocktailURL}`)
    .then((response) => response.json())
    .then((cocktails) => {
      const cocktails1 = cocktails.drinks;
      cocktails1.forEach((cocktail) => {
        renderCocktails(cocktail);
      });
    });
};

const renderCocktails = (btn) => {
  const cocktailMenu = document.querySelector("#cocktail-bar");
  const btn = document.createElement("button");
  btn.innerText = cocktail.strDrink;
  btn.addEventListener("click", (event) => {
  console.log("event");
  renderDetails(cocktail)});
}
  cocktailMenu.appendChild(btn);


const renderDetails = (cocktail) => {
  const image = document.querySelector("#image");
  image.src = cocktail.strImageSource
  image.alt = cocktail.strDrink
  cocktailInfo.appendChild(image);
  const name = document.querySelector("#name");
  name.innerText = cocktail.strDrink;
  cocktailInfo.appendChild(name);

};

const init = () => {
  fetchAll();

};
init();
