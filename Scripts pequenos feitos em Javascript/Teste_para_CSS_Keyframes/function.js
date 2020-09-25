var Possibilidade = [50,250,450, 650, 850];
var Escolha = Math.floor(Math.random()*5);
document.getElementById('Certo').style.left = Possibilidade[Escolha] + "px";
var Chance = 4;
var Jogavel = 0;
var Pontos=0;

function Proximo(){
  Pontos+=Chance;
  Possibilidade = [50,250,450, 650, 850];
  Escolha = Math.floor(Math.random()*5);
  document.getElementById('Certo').style.left = Possibilidade[Escolha] + "px";
  Chance = 4;
  document.getElementById("botãoN").style.display = "none";
  document.getElementById("Texto").innerText = "Chances: " + Chance;
  document.getElementById("Pontos").innerText ="Pontos: " + Pontos;
  document.getElementById("Mario").style.display = "none";
  var local = event.clientX;
  if(local>=0 && local <=200){
    local = 50;
  }else if(local>200 && local <=400){
    local = 250;
  }else if(local>400 && local <=600){
    local = 450;
  }else if(local>600 && local <=850){
    local = 650;
  }else{
    local = 850;
  }
}


function Iniciar(){
  Jogavel=1;
  document.getElementById("Certo").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("Cano1").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("Cano2").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("Cano3").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("Cano4").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("Cano5").style.cursor = "url('cursor.png'), -moz-zoom-in";
  document.getElementById("botão").style.display = "none";
  document.getElementById("Texto").innerText = "Chances: " + Chance;
  document.getElementById("Pontos").innerText ="Pontos: " + Pontos;
  document.getElementById("Branco").style.display = "table";
}

function Desaparecer(){
  document.getElementById("Errou").style.display = "none";
}


function Cano(){
  if(Jogavel==1){
    document.getElementById("Texto").innerText = "Chances: " + (Chance-1);
    var local = event.clientX;
    if(local>=0 && local <=200){
      local = 50;
    }else if(local>200 && local <=400){
      local = 250;
    }else if(local>400 && local <=600){
      local = 450;
    }else if(local>600 && local <=850){
      local = 650;
    }else{
      local = 850;
    }
    if(local==(Possibilidade[Escolha])){
      document.getElementById("Mario").style.left = (Possibilidade[Escolha]+20) + "px";
      document.getElementById("Mario").style.display = "inline";
      document.getElementById("Texto").innerText = "Chances: " + Chance;
      document.getElementById("Pontos").innerText ="Pontos: " + Pontos;
      document.getElementById("botãoN").style.display = "inline";
    }else{
      Chance--;
      if(Chance>0){
        document.getElementById("Errou").style.display = "inline";
      }
      if(Chance==0){
        document.getElementById("Death").style.left = (Possibilidade[Escolha]+20) + "px";
        document.getElementById("Death").style.display = "inline";
        document.getElementById("Reset").style.display = "inline";
        document.getElementById("Texto").innerText = "Chances: " + Chance;
        Jogavel = 0;
      }
    }
}
}

function Reiniciar() {
  Pontos=0;
  Chance=4;
  Jogavel=1;
  document.getElementById("Death").style.display = "none";
  document.getElementById("Reset").style.display = "none";
  document.getElementById("Texto").innerText = "Chances: " + Chance;
  document.getElementById("Pontos").innerText ="Pontos: " + Pontos;
}
