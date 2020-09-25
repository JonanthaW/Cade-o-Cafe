var clickado=0;

function botão(){
    if(clickado >=-1 && clickado <= 999){
      var a = document.getElementById("contagem");
      clickado++;
      a.innerHTML = clickado;

  }else{
    var a = document.getElementById("contagem");
    a.innerText = "máximo atingido";
  }
};

function resetar(){
  var b = document.getElementById("contagem");
  clickado = 0;
  b.innerText = "Resetado";
};
