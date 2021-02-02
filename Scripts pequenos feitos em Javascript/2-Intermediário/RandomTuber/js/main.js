async function generateVideo(character) {

      var randomString = "";
      var splitted = character.split("");
      for(var i=0; i<5; i++) {
        randomString += splitted[Math.floor(Math.random() * character.length)];
      }

      const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=id&maxResults=1&type=video&q=" + randomString + "&key=" + apiKEY);
      const data = await response.json();

      if (data.error) {
        if (data.error.code == 403) {
            alert("Your limit diary excedeed, please return after 24hrs");
        }
        else if (data.error.code == 400) {
            alert("Check your API KEY, it might seems wrong.");
            location.reload();
        }
      }
      else {
          document.querySelector("iframe").src = "https://www.youtube.com/embed/" + data.items[0].id.videoId;
      }
  }


var apiKEY = window.prompt("Enter your GOOGLE API KEY");

document.querySelector("button").addEventListener("click", function() {
  document.querySelector("h1").style.display = "none";
  document.querySelector("button").style.top = "15%";
  document.querySelector("button").innerText = "Rollout!";
  document.querySelector("iframe").style.display = "block";
  document.querySelector("iframe").style.top = "25%";
  generateVideo("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_");
});
