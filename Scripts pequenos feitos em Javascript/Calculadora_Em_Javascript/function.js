function Calc() {
  var num = 0;
  var resultado = 0;
  var total = 0;
  var sinal;
  var repet = false;
  var aux = total+1;
  var aberto = false;

  //Eventos dos botões numéricos

  document.getElementById('Botao0').addEventListener("click", function()
  {num+=document.getElementById('Botao0').value; document.getElementById('Textodocorpo').innerText += 0 });

  document.getElementById('Botao1').addEventListener("click", function()
  {num+=document.getElementById('Botao1').value; document.getElementById('Textodocorpo').innerText += 1 });

  document.getElementById('Botao2').addEventListener("click", function()
  {num+=document.getElementById('Botao2').value; document.getElementById('Textodocorpo').innerText += 2});

  document.getElementById('Botao3').addEventListener("click", function()
  {num+=document.getElementById('Botao3').value; document.getElementById('Textodocorpo').innerText += 3 });

  document.getElementById('Botao4').addEventListener("click", function()
  {num+=document.getElementById('Botao4').value; document.getElementById('Textodocorpo').innerText += 4 });

  document.getElementById('Botao5').addEventListener("click", function()
  {num+=document.getElementById('Botao5').value; document.getElementById('Textodocorpo').innerText += 5 });

  document.getElementById('Botao6').addEventListener("click", function()
  {num+=document.getElementById('Botao6').value; document.getElementById('Textodocorpo').innerText += 6 });

  document.getElementById('Botao7').addEventListener("click", function()
  {num+=document.getElementById('Botao7').value; document.getElementById('Textodocorpo').innerText += 7 });

  document.getElementById('Botao8').addEventListener("click", function()
  {num+=document.getElementById('Botao8').value; document.getElementById('Textodocorpo').innerText += 8 });

  document.getElementById('Botao9').addEventListener("click", function()
  {num+=document.getElementById('Botao9').value; document.getElementById('Textodocorpo').innerText += 9 });

  document.getElementById('PI').addEventListener("click", function()
  {num+=document.getElementById('PI').value; document.getElementById('Textodocorpo').innerText += 3.14159 });

  document.getElementById('Flutuante').addEventListener("click", function(){if(num==0){num = 0+document.getElementById('Flutuante').value;document.getElementById('Textodocorpo').innerText = num}else if(num>0){num += document.getElementById('Flutuante').value;document.getElementById('Textodocorpo').innerText = num;}})


  //Eventos dos botões Aritméticos;

  document.getElementById('BotaoApagar').addEventListener("click", function(){num=0; resultado=0; total=0; repet=false; document.getElementById('Textodocorpo').innerText=""});

  document.getElementById('BotaoResultado').addEventListener("click", function(){switch (sinal) {case "+":total += Number(num);document.getElementById('Textodocorpo').innerText = total;resultado = total;num = 0;break;case "-":total = total - Number(num);document.getElementById('Textodocorpo').innerText = total;resultado = total;num = 0;break;case "/":total = total / Number(num);document.getElementById('Textodocorpo').innerText = total;resultado = total;num = 0;break;case "*":total = total * Number(num);document.getElementById('Textodocorpo').innerText = total;resultado = total;num = 1;break;case "XY":total = Math.pow(total, num);resultado = total;repet=true;document.getElementById('Textodocorpo').innerText = total;num = 0;break;}})

  document.getElementById('BotaoAdicao').addEventListener("click", function(){sinal = "+";switch (sinal) {case "+":if(repet==false){resultado = num;total += Number(num);num = 0;document.getElementById('Textodocorpo').innerText = resultado.slice(1) + "+" ;repet=true;}else if(repet==true){total += Number(num);num = 0;document.getElementById('Textodocorpo').innerText = total + "+" ;};break;}})

  document.getElementById('BotaoSubtracao').addEventListener("click", function(){sinal = "-";switch (sinal) {case "-":if(repet==false){resultado = num;total += Number(num);num = 0;document.getElementById('Textodocorpo').innerText = resultado.slice(1) + "-" ;repet=true;}if(repet==true){total -= Number(num);num = 0;document.getElementById('Textodocorpo').innerText = total + "-" ;}break;}})

  document.getElementById('BotaoDivisao').addEventListener("click", function(){sinal = "/";switch (sinal) {case "/":if(repet==false){resultado = num;total += Number(num);num = 0;document.getElementById('Textodocorpo').innerText = resultado.slice(1) + "/" ;repet=true;}else if(repet==true){total = total / Number(num);num = 0;document.getElementById('Textodocorpo').innerText = total + "/" ;}break;}})

  document.getElementById('BotaoMultiplicacao').addEventListener("click", function(){sinal = "*";switch (sinal) {case "*":if(repet==false){resultado = num;total += Number(num);num = 0;document.getElementById('Textodocorpo').innerText = resultado.slice(1) + "*" ;repet=true;}else if(repet==true){total = total * Number(num);num = 0;document.getElementById('Textodocorpo').innerText = total + "*" ;}break;}})

  //Eventos dos botões Quality Of Life;

  document.getElementById('BotaoFatorial').addEventListener("click", function(){for(var i=Number(num); i>=1; i--){aux *= i;}total = aux;document.getElementById('Textodocorpo').innerText = num+"! = "+ aux;num = total;aux = 1;})

  document.getElementById('BotaoXElevadoY').addEventListener("click", function(){if(repet==false){sinal = "XY";resultado = num;total = Number(num);num = 0;document.getElementById('Textodocorpo').innerText = resultado.slice(1) +"ʸ";}else if(repet==true){document.getElementById('Textodocorpo').innerText = total + "ʸ";}})

  document.getElementById('BotaoAoQuadrado').addEventListener("click", function(){total = Math.pow(Number(num), 2);document.getElementById('Textodocorpo').innerText = total;num = total;})

  document.getElementById('BotaoAoCubo').addEventListener("click", function(){total = Math.pow(Number(num), 3);document.getElementById('Textodocorpo').innerText = total;num = total;})


  //Eventos dos botões de conversão numérica

  document.getElementById('BotaoBin').addEventListener("click", function(){if(total==0){total= Number(num);document.getElementById('Textodocorpo').innerText = total.toString(2);}else {document.getElementById('Textodocorpo').innerText = total.toString(2);}})

  document.getElementById('BotaoHex').addEventListener("click", function(){if(total==0){total=Number(num);document.getElementById('Textodocorpo').innerText = total.toString(16).toUpperCase();}else {document.getElementById('Textodocorpo').innerText = total.toString(16).toUpperCase();}})

  document.getElementById('BotaoOct').addEventListener("click", function(){if(total==0){total=Number(num);document.getElementById('Textodocorpo').innerText = total.toString(8);}else {document.getElementById('Textodocorpo').innerText = total.toString(8);}})

  document.getElementById('BotaoDec').addEventListener("click", function(){if(total==0){total=Number(num);total.toString(2);document.getElementById('Textodocorpo').innerText = total;}else{total.toString(2);document.getElementById('Textodocorpo').innerText = total;}})

  //Eventos dos botões adicionais

  document.getElementById('addEsquerda').addEventListener("click", function(){
    if(aberto==false){
      document.getElementById("Constantes").style.visibility = "visible";
      document.getElementById('Constantes').style.left = 90 + "px";
      document.getElementById('addEsquerda').innerText = "Fechar Constantes"
      aberto=true;
    } else {
      document.getElementById("Constantes").style.visibility = "hidden";
      document.getElementById('addEsquerda').innerText = "Abrir Constantes"
      aberto=false;
    }
  })
}
