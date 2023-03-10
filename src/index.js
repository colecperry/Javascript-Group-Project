// ! GLOBAL VARIABLES

const cocktailURL = "https://www.thecocktaildb.com/api/json/v2/9973533/latest.php";
const instructions = document.querySelector("#instructions");
const ingredients = document.querySelector("#ingredients");
const measures = document.querySelector("#Measure");

const fetchAll = () => {
  fetch(`${cocktailURL}`)
    .then((response) => response.json())
    .then((cocktails) => {
      const cocktails1 = cocktails.drinks;
      cocktails1.forEach((cocktail) => {
          // newArr = objects inside cocktail
          let newArr =  Object.keys(cocktail)
          .filter((k) => cocktail[k] != null) // finding any value that == null
          .reduce((a, k) => ({ ...a, [k]: cocktail[k] }), {}); // removing it from array
          console.log(newArr)
          renderCocktails(newArr);
      });
    });
};

const renderCocktails = (cocktail) => {
    const cocktailMenu = document.querySelector("#cocktail-bar");
    const span = document.createElement("span");
    span.innerText = cocktail.strDrink;
    span.addEventListener("click", (e) => {
        renderDetails(cocktail);
        dropDown(cocktail);
        // Resetting ingredients and instructions after different
        // drink is clicked
        ingredients.textContent = null;
        instructions.textContent = null;
    });
    cocktailMenu.appendChild(span);
};

const renderDetails = (cocktail) => {
    const image = document.querySelector("#image");
    const name = document.querySelector("#name");

    image.src = cocktail.strDrinkThumb;
    image.alt = cocktail.strDrink;
    name.textContent = cocktail.strDrink;
}

function dropDown(cocktail) {
    document.getElementById("button").addEventListener("click",(e) =>{
        document.getElementById("myDropdown").classList.toggle("show")
    })
    document.getElementById("one").addEventListener("click", (e) => {
        e.preventDefault();
        renderIngredients(cocktail)
    })
    document.getElementById("two").addEventListener("click", (e) => {
        e.preventDefault();
        renderInstructions(cocktail);
    })
}

const renderInstructions = (cocktail) => {
    instructions.textContent = cocktail.strInstructions;
}

const renderIngredients = (cocktail) => {

    let ing = Object.entries(cocktail)
        // finding all of the ingredient values
        .filter(([j]) => j.startsWith("strIngredient"))
        .map(([,k]) => k); // adding it to the ing array
    let measure = Object.entries(cocktail)
    // finding all the measurement values
    .filter(([j]) => j.startsWith("strMeasure"))
    .map(([,k]) => k); // adding it to the measure array
    for(i = 0; i< measure.length; i++){ //removing all measure values that have ""
        if(measure[i] === null){
            measure.pop()
        }
    }
    ingredients.textContent = null; // clearing ingredients
    //combining the ingredients and measure values together
    for(i=0;i<ing.length;i++){
        const li = document.createElement("p")
        li.textContent = ing[i] + " - " + measure[i]
        ingredients.append(li)
    }
}
const init = () => {
    fetchAll();
    //creating form response and rendering it onto the page
    const form = document.querySelector('#review-form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const review = document.querySelector("#reviews").value
        const addReview = document.createElement("p")
        addReview.innerHTML = `Review: ${review}`
        instructions.appendChild(addReview)
        e.target.reset()
    });
}
init();