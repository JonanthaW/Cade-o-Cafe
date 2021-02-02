function randomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var audio = new Audio('music.mp3');

window.onload = () => {
  for (let i=0; i<=512; i++) {
    document.querySelector(".squares").append(document.createElement("div"));
    document.querySelector(`.squares div:nth-child(${i+1})`).addEventListener("mouseover", () => {
      let color = randomColor();
      document.querySelector(`.squares div:nth-child(${i+1})`).style.cssText = `background-color: ${color}; box-shadow: ${color} 0px 0px 2px, ${color} 0px 0px 2px`;
    })
    document.querySelector(`.squares div:nth-child(${i+1})`).addEventListener("mouseout", () => {
      document.querySelector(`.squares div:nth-child(${i+1})`).style.cssText = "transition: 2s; box-shadow: 0px 0px 2px black; background-color: rgba(31,31,31)";
    })
  }
  document.querySelector("#goCrazy").addEventListener("click", async ()=> {
    audio.play();
    goingCrazy = true;
    document.querySelector("#goPause").style.display = "block";
    document.querySelector("#goCrazy").style.display = "none";
    while (goingCrazy) {
      for (let i=0; i<=512; i++) {
        let color = randomColor();
        document.querySelector(`.squares div:nth-child(${i+1})`).style.cssText = `background-color: ${color}; box-shadow: ${color} 0px 0px 2px, black 0px 0px 2px`;
      }
      await sleep(500);
    }
  })
  document.querySelector("#goPause").addEventListener("click", ()=> {
    audio.pause();
    goingCrazy = false;
    document.querySelector("#goPause").style.display = "none";
    document.querySelector("#goCrazy").style.display = "block";
    for (let i=0; i<=512; i++) {
      document.querySelector(`.squares div:nth-child(${i+1})`).style.cssText = "box-shadow: 0px 0px 2px black; background-color: rgba(31,31,31)";
    }
  })
}
