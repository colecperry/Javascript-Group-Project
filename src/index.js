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

const renderCocktails = (cocktail) => {
  const cocktailMenu = document.querySelector("#cocktail-bar");
  const btn = document.createElement("button");
  btn.innerText = cocktail.strDrink;
  cocktailMenu.appendChild(btn);
  btn.addEventListener("click", (e) => renderDetails(cocktail))
  }


const renderDetails = (cocktail) => {
  const cocktailImage = document.createElement("img");
  cocktailImage.src = cocktail.strImageSource
  cocktailImage.alt = cocktail.strDrink
  cocktailInfo.appendChild(cocktailImage);
  const cocktailName = document.querySelector("#name");
  cocktailName.innerText = cocktail.strDrink;
  cocktailInfo.appendChild(cocktailName);
  const measureAndIngredient1 = document.createElement('p');
  measureAndIngredient1.innerText = "- " + cocktail.strMeasure1 + " " + cocktail.strIngredient1
  cocktailInfo.appendChild(measureAndIngredient1);
  const measureAndIngredient2 = document.createElement('p');
  measureAndIngredient2.innerText = "- " + cocktail.strMeasure2 + " " + cocktail.strIngredient2
  cocktailInfo.appendChild(measureAndIngredient2);
  const measureAndIngredient3 = document.createElement('p');
  measureAndIngredient3.innerText = "- " + cocktail.strMeasure3 + " " + cocktail.strIngredient3
  cocktailInfo.appendChild(measureAndIngredient3);
  const measureAndIngredient4 = document.createElement('p');
  measureAndIngredient4.innerText = "- " + cocktail.strMeasure4 + " " + cocktail.strIngredient4
  cocktailInfo.appendChild(measureAndIngredient4);
  const measureAndIngredient5 = document.createElement('p');
  measureAndIngredient5.innerText = "- " + cocktail.strMeasure5 + " " + cocktail.strIngredient5
  cocktailInfo.appendChild(measureAndIngredient5);
  const measureAndIngredient6 = document.createElement('p');
  measureAndIngredient6.innerText = "- " + cocktail.strMeasure6 + " " + cocktail.strIngredient6
  cocktailInfo.appendChild(measureAndIngredient6);
  const measureAndIngredient7 = document.createElement('p');
  measureAndIngredient7.innerText = "- " + cocktail.strMeasure7 + " " + cocktail.strIngredient7
  cocktailInfo.appendChild(measureAndIngredient7);
  const recipe = document.createElement('p');
  recipe.innerText = "Instructions: " + cocktail.strInstructions 
  cocktailInfo.appendChild(recipe);
};
// goin to work on this tomorrow a lot harder then I rememebred and jsut getting over a panic attack
// const reviewform = document.getElementById("review");

// reviewform.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let review = document.getElementById("valuw");
//   review.value = "";
//   cocktailInfo.appendChild(review)
// });
  
  
    // new code below
//figure out how to not show null under ingredients for recipes that have more ingredients
//take away ability to render mutiple cocktails under the detailed-info container
//add event listener to review button and take value & append to detailed-info container
//add one more event listener
//style and reformat with CSS




const init = () => {
  fetchAll();

};
init();
