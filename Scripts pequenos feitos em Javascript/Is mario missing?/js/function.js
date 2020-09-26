function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = ()=> {
  for(let i=0; i<5; i++) {
    let position = ["far-left", "left", "center", "right", "far-right"];
    let createImage =  document.createElement("img");
    createImage.id = position[i];
    createImage.src = "img/cano.png";
    document.querySelector(".canos").appendChild(createImage);
  }
  setTimeout(()=> {document.querySelector("#mario").style.display = "block";}, 100);
  getLocal();
}

var pontos = 0;
let position = ["far-left", "left", "center", "right", "far-right"];
let local = position[Math.floor(Math.random() * position.length)];

function getLocal() {
  document.getElementById("far-left").addEventListener("click", ()=> {
    local == "far-left" ? acertou() : errou();
  });
  document.getElementById("left").addEventListener("click", ()=> {
    local == "left" ? acertou() : errou();
  });
  document.getElementById("center").addEventListener("click", ()=> {
    local == "center" ? acertou() : errou();
  });
  document.getElementById("right").addEventListener("click", ()=> {
    local == "right" ? acertou() : errou();
  });
  document.getElementById("far-right").addEventListener("click", ()=> {
    local == "far-right" ? acertou() : errou();
  });
}

function marioPlace() {
  let marioY = document.querySelector("#mario");
  marioY.src = "img/found.png";
  marioY.style.top = "80%";
  position = ["far-left", "left", "center", "right", "far-right"];
  local = position[Math.floor(Math.random() * position.length)];

  if (local === "far-left") {  marioY.style.left = "8%";  }
  else if (local === "left") {  marioY.style.left = "28%";  }
  else if (local === "center") {  marioY.style.left = "48%";  }
  else if (local === "right") {  marioY.style.left = "68%";  }
  else {  marioY.style.left = "88%";  }
}


async function acertou() {
  pontos++;
  document.querySelector(".background h1").innerText = "Pontos: " + pontos;
  document.querySelector("#mario").style.top = "50%";
  document.querySelector("#mario").src = "img/death.png";
  await sleep(1000);
  marioPlace();
}

async function errou() {
  pontos--;
  document.querySelector(".background h1").innerText = "Pontos: " + pontos;
  document.querySelector("#mario").style.top = "50%";
  await sleep(1000);
  marioPlace();
}
