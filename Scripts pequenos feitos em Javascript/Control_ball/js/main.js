window.onload = () => {
  let axX = document.getElementById("axiusX");
  let axY = document.getElementById("axiusY");
  let ball = document.getElementById("ballControlled");

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function sendCoords() {
    axX.innerText = `X = ${ball.getBoundingClientRect().left}px`;
    axY.innerText = `Y = ${ball.getBoundingClientRect().top}px`;
  };
  ball.style.left = `${Math.floor(ball.getBoundingClientRect().left)}px`;
  ball.style.top = `${Math.floor(ball.getBoundingClientRect().top)}px`;

  sendCoords();

  document.addEventListener("click", async (movement)=> {
    let numX = ball.getBoundingClientRect().left;
    let numY = ball.getBoundingClientRect().top;

    while(numX != movement.x) {
      if(numX <= movement.x) {
        numX++;
        ball.style.left = numX + "px";
        await sleep(0.5);
      }
      else if (numX >= movement.x) {
        numX--;
        ball.style.left = numX + "px";
        await sleep(0.5);
      }
    }

    while(numY != movement.y) {
      if(numY <= movement.y) {
        numY++;
        ball.style.top = numY + "px";
        await sleep(0.5);
      }
      else if (numY >= movement.y) {
        numY--;
        ball.style.top = numY + "px";
        await sleep(0.5);
      }
    }
    sendCoords();
  })
}
