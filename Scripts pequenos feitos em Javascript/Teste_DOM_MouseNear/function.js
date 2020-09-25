var Total=1;

function Perto(){
  var X = Math.floor(Math.random() * 1000) + "px";
  var Y = Math.floor(Math.random() * 570) + "px";
  document.getElementById("Bonequinho").style.left = X;
  document.getElementById("Bonequinho").style.top = Y;
  document.getElementById("Texto").innerText = "Total: " + Total;
  Total+=1;
}
