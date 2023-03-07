//fetch api key for 10 cocktails
const cocktailURL =
  "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";

  
const fetchAll = () => {
  fetch(`${cocktailURL}`)
    .then((resp) => resp.json())
    .then((cocktails) => {
      cocktails.forEach((cocktailObj) =>{
        renderCocktails(cocktails);
      });
    });
};

/*fetch("https://www.thecocktaildb.com/api/json/v2/9973533/latest.php")
  .then((resp) => resp.json())
  .then((cocktails) => renderCocktails(cocktails));

// render cocktail names to the top of the page

/*const renderCocktails = (cocktails) => {
  cocktails.forEach((cocktail) => {
    const cocktailMenu = document.querySelector("#cocktail-bar");
    const span = document.createElement("span");
    span.innerText = drinks.strDrink;
    cocktailMenu.appendChild(span);
  });
};

//"https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=margarita"
