function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var player = Number(40);
var computer = Number(40);
var points_left = Number(0);
var points_right = Number(0);

window.onload = () => {
  document.querySelector("#player").style.top = "40%";
  document.querySelector("#computer").style.top = "40%";
  document.querySelector("#points_left").innerText = `Pontos: ${points_left}`
  document.querySelector("#points_right").innerText = `Pontos: ${points_right}`;
  document.querySelector("#ball").style.cssText = `left: ${ballX}%; top: ${ballY}%`;
  ballMoving();
}

// Controles
document.body.addEventListener("keydown", (e)=> {
  switch (e.keyCode) {
        case 38: // Seta direcional para cima
          if (player > 2) {
              document.querySelector("#player").style.top = `${player-=2}%`;
            }
            break;
        case 40: // Seta direcional para baixo
          if (player < 88) {
              document.querySelector("#player").style.top = `${player+=2}%`;
            }
            break;

        case 73: // Botão "I"
          if (computer > 2) {
              document.querySelector("#computer").style.top = `${computer-=2}%`;
            }
            break;
        case 75: // Botão "K"
          if (computer < 88) {
              document.querySelector("#computer").style.top = `${computer+=2}%`;
            }
            break;
    }
})

// Direção da bola
var ballX = Number(50); // Localização atual da bola Horizontalmente
var ballY = Number(50); // Localização atual da bola Verticalmente

var options_directionX = ["left", "right"]; // Movimento da bola
var directionX = options_directionX[Math.floor(Math.random() * options_directionX.length)];

var options_directionY = ["top", "bottom"]; // Movimento da bola
var directionY = options_directionY[Math.floor(Math.random() *  options_directionY.length)];

function resetBall() {
  ballX = 50;
  ballY = 50;
}

async function ballMoving() {

  // Mudar cor da bola
  if (ballX <= 50) {
    document.querySelector("#ball").style.backgroundColor = "white";
  }
  if (ballX > 50) {
    document.querySelector("#ball").style.backgroundColor = "black";
  }

  // Marca os pontos caso passe do controle
  if (ballX < 1) {
    document.querySelector("#points_right").innerText = `Pontos: ${points_right+=1}`;
    directionX = "left";
    resetBall();
  }
  if (ballX > 99) {
    document.querySelector("#points_left").innerText = `Pontos: ${points_left+=1}`;
    directionX = "right";
    resetBall();
  }

  // Se a bola em um dos polos, ela inverterá o lado do movimento
  if (directionY == "top" && ballY > 97) {
  directionY = "bottom";
  }
  if (directionY == "bottom" && ballY < 1) {
    directionY = "top";
  }

  // Controle de altura e direção ao computer
  if (directionX == "left") {
      document.querySelector("#ball").style.left = `${ballX+=1}%`;
      await sleep(30);

      if (directionY == "top") {
        document.querySelector("#ball").style.top = `${ballY+=1}%`;
      }
      else if (directionY == "bottom") {
        document.querySelector("#ball").style.top = `${ballY-=1}%`;
      }

      if (ballX >= 98 && computer >= 0 && computer <=10 && ballY >= 0 && ballY <= 10 ||
          ballX >= 98 && computer >= 8 && computer <= 18 && ballY >= 8 && ballY <= 18 ||
          ballX >= 98 && computer >= 16 && computer <= 26 && ballY >= 16 && ballY <= 26 ||
          ballX >= 98 && computer >= 24 && computer <= 34 && ballY >= 24 && ballY <= 34 ||
          ballX >= 98 && computer >= 32 && computer <= 42 && ballY >= 32 && ballY <= 42 ||
          ballX >= 98 && computer >= 40 && computer <= 50 && ballY >= 40 && ballY <= 50 ||
          ballX >= 98 && computer >= 48 && computer <= 58 && ballY >= 48 && ballY <= 58 ||
          ballX >= 98 && computer >= 56 && computer <= 66 && ballY >= 56 && ballY <= 66 ||
          ballX >= 98 && computer >= 64 && computer <= 74 && ballY >= 64 && ballY <= 74 ||
          ballX >= 98 && computer >= 72 && computer <= 82 && ballY >= 72 && ballY <= 72 ||
          ballX >= 98 && computer >= 80 && computer <= 90 && ballY >= 80 && ballY <= 90 ||
          ballX >= 98 && computer >= 88 && computer <= 98 && ballY >= 88 && ballY <= 98) {
        directionX = "right";
        ballMoving();
      }
      else {
          ballMoving();
        }
    }

    // Controle de altura e direção ao player
    if (directionX == "right") {
        document.querySelector("#ball").style.left = `${ballX-=1}%`;
        await sleep(30);

        if (directionY == "top") {
          document.querySelector("#ball").style.top = `${ballY+=1}%`;
        }
        else if (directionY == "bottom") {
          document.querySelector("#ball").style.top = `${ballY-=1}%`;
        }

        if (ballX <= 3 && player >= 0 && player <=10 && ballY >= 0 && ballY <= 10 ||
    ballX <= 3 && player >= 8 && player <= 18 && ballY >= 8 && ballY <= 18 ||
    ballX <= 3 && player >= 16 && player <= 26 && ballY >= 16 && ballY <= 26 ||
    ballX <= 3 && player >= 24 && player <= 34 && ballY >= 24 && ballY <= 34 ||
    ballX <= 3 && player >= 32 && player <= 42 && ballY >= 32 && ballY <= 42 ||
    ballX <= 3 && player >= 40 && player <= 50 && ballY >= 40 && ballY <= 50 ||
    ballX <= 3 && player >= 48 && player <= 58 && ballY >= 48 && ballY <= 58 ||
    ballX <= 3 && player >= 56 && player <= 66 && ballY >= 56 && ballY <= 66 ||
    ballX <= 3 && player >= 64 && player <= 74 && ballY >= 64 && ballY <= 74 ||
    ballX <= 3 && player >= 72 && player <= 82 && ballY >= 72 && ballY <= 72 ||
    ballX <= 3 && player >= 80 && player <= 90 && ballY >= 80 && ballY <= 90 ||
    ballX <= 3 && player >= 88 && player <= 98 && ballY >= 88 && ballY <= 98) {
          directionX = "left";
          ballMoving();
        }
        else {
            ballMoving();
          }
      }
}
