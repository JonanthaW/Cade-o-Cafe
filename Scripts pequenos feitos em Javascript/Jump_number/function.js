function GerarResultado(){
  var numeroinicial = Number(document.getElementById("numeroinicial").value);
  var pulos = Number(document.getElementById("pulos").value);
  var maximo = Number(document.getElementById("maximo").value);
  var numeros = null;

  if(pulos<=0){
    pulos=1;
    window.alert("Valor de pulos menor ou igual a 0 !\n\tConsiderado valor como 1.")
  }
  if(maximo<=0){
    maximo=30;
    window.alert("Valor máximo menor ou igual a 0 !\n\tConsiderado valor como 30.")
  }
  if(numeroinicial<maximo){
    for(var i=numeroinicial; i<=maximo; i+=pulos){
      numeros+=String(i) + " &#10145 ";
    }
  }
  else {
    for(var i=numeroinicial; i>=maximo; i-=pulos){
      numeros+=String(i) + " &#10145 ";
    }
  }
    var res = numeros.replace("null", "");
    var tamanho = res.length;
    var real = res.substr(0, tamanho-8); //-8 porquê o codigo da seta tem 6 digitos, +1 espaço
    real+= "&#127937";
    document.getElementById("resultado").innerHTML = real;
}
