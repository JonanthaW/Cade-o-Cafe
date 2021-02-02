async function getIMG() {
  try {
      let response_dog = await fetch("https://dog.ceo/api/breeds/image/random")
        .then((response_dog) => response_dog.json())
        .then((response_dog) => document.getElementById("dog").src = response_dog.message);

      let response_cat = await fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png")
        .then((response_cat) => response_cat.json())
        .then((response_cat) => document.getElementById("cat").src = response_cat[0].url);
  }
  catch (err) {
        console.log("Ops, something went wrong!");
  }

  document.getElementById("loader").style.display = "none";

}

getIMG();

document.getElementById("dog").addEventListener("click", getIMG)

document.getElementById("cat").addEventListener("click", getIMG)
