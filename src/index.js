const cocktailURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";

const cocktailInfo = document.querySelector("#detailed-info");

const fetchAll = () => {
  fetch(`${cocktailURL}`)
    .then((response) => response.json())
    .then((cocktails) => {
      console.log(cocktails.drinks);
      const cocktails1 = cocktails.drinks;
      cocktails1.forEach((cocktail) => {
        console.log(cocktail);
        renderCocktails(cocktail);
      });
    });
};

const renderCocktails = (cocktail) => {
  const cocktailMenu = document.querySelector("#cocktail-bar");
  const btn = document.createElement("button");
  btn.innerText = cocktail.strDrink;
  cocktailMenu.appendChild(btn);
};

/* const renderDetails = (cocktail) => {
    btn.addEventListener("click", () => renderDetails(cocktail));
    cocktails1.forEach(cocktail) => {
    const image = document.createElement("image");
    image.src = cocktail.strDrinkThumb
    cocktailInfo.appendChild(image);
    const name = document.querySelector("#name")
    name.innerText = cocktail.strDrink
    const ingredients = createElement("p")
    const ingredent1 = cocktail.strIngredient1, cocktail.strMeasure1
    const ingredent2 = cocktail.strIngredient2, cocktail.strMeasure2
    const ingredent3 = cocktail.strIngredient3, cocktail.strMeasure3
    const ingredent4 = cocktail.strIngredient4, cocktail.strMeasure4
    ingredients.innerText = "ingredient1", "ingredient2", "ingredient3", "ingredient4"
    const 
    cocktailInfo.appendChild(name);
    cocktailInfo.appendChild(ingredients);

    }

    } */

const init = () => {
  fetchAll();
  renderCocktails();
};
init();
