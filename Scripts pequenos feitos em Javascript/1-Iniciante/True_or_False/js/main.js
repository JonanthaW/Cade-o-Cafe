const url = "https://opentdb.com/api.php?amount=1&type=boolean";
var score = Number(0);
var correct_answer = "";

async function getQuestion(){
  try {
    var response = await fetch(url);
    var data = await response.json();
    document.getElementById("question").innerHTML = data.results[0].question; // GET QUESTION FROM API
    document.getElementById("difficulty").innerText = `Difficulty: ${data.results[0].difficulty}`; //GET DIFFICULTY
    document.getElementById("category").innerText = `Category: ${data.results[0].category}`; //GET CATEGORY;
    document.getElementById("score").innerText = `Score: ${score}`;
    correct_answer = data.results[0].correct_answer; //GET CORRECT ANSWER;
  }
  catch(err) {
    alert("Ops, something went wrong! Try reloading the page.");
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

for(var i=1; i<=2; i++) {
  document.querySelector(`.choose button:nth-child(${i})`).addEventListener("click", async function(){
    if (this.value === correct_answer) {
      score++;
      document.body.style.backgroundColor = "#5dfc5d";
      await sleep(500);
      document.body.style.backgroundColor = "#54bfe1";
    }
    else {
        score--;
        document.body.style.backgroundColor = "#f75966";
        await sleep(500);
        document.body.style.backgroundColor = "#54bfe1";
    }
    getQuestion();
  })
}

getQuestion();
