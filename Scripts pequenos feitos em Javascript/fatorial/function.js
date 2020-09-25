
function calc() {
  var valor = Number(document.getElementById('fatorial').value);
  var total= valor;

  for(var i=valor-1; i>=1;i--){
    total *= i;
  }

  document.getElementById('re').innerText = `fatorial de ${valor} é ${total}`;

}
