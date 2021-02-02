async function generateMeal() {
  var url = "https://www.themealdb.com/api/json/v1/1/random.php";
  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("nome_receita").innerText = data.meals[0].strMeal;
    document.getElementById("img_receita").src = data.meals[0].strMealThumb;
    var ingredients = [];
    document.getElementById("ingredientes_receita").innerText = "";
    for(var i=0;i<=20; i++) {
      if(data.meals[0][`strIngredient${i+1}`]) {
          ingredients[i] = data.meals[0][`strIngredient${i+1}`];
          var newLi = document.createElement('li');
          newLi.innerText = ingredients[i];
          document.getElementById("ingredientes_receita").append(newLi);
      }
      else {
        break;
      }
    }
    document.getElementById("preparo_receita").innerText = data.meals[0].strInstructions;
    document.querySelector("iframe").src = data.meals[0].strYoutube.replace("watch?v=", "embed/");
  }
  catch(err) {
    console.log("oops, something went wrong!")
  }
}

document.querySelector("button").addEventListener("click", function(){
  document.querySelector("h1").style.top = "11%";
  document.querySelector("button").style.top = "26%";
  document.querySelector(".receita").style.display = "block";
  document.querySelector("iframe").style.display = "block";
  generateMeal();
});
