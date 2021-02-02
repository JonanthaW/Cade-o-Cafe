function createPass() {
  document.getElementById("gerar").addEventListener("click", ()=>{
    let tamanho = document.getElementById("valor").value;
    let pass = "";
    let string = "";
    let force = 0 + tamanho;

    if (force < 10) {
      document.getElementById("força").innerText = "Força do password: Muito fraco";
    }
    else if(force >= 15  && force < 30 ) {
      document.getElementById("força").innerText = "Força do password: fraco";
    }
    else if(force >= 30  && force < 60) {
      document.getElementById("força").innerText = "Força do password: normal";
    }
    else if (document.getElementById("uppercase").checked && document.getElementById("lowercase").checked && document.getElementById("numbers").checked && document.getElementById("symbols").checked && force >= 60){
      document.getElementById("força").innerText = "Força do password: Recomendado!";
    }

    if (document.getElementById("uppercase").checked) {
      string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
      string += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
      string += "1234567890";
    }
    if(document.getElementById("symbols").checked) {
      string += "!@#$%*/.^~){}[];|-";
    }

    if (string == "") {
      alert("MARQUE PELO MENOS 1 DAS OPÇÕES DE PREENCHIMENTO!");
    }

    if (tamanho == "") {
      alert("ESCOLHA UM TAMANHO !");
    }

    if (tamanho < 10) {
      alert("PARA SUA SEGURANÇA, TAMANHOS MENORES QUE 10 NÃO PERMITIDOS!");
    }

    else if (string.length >= 1 && tamanho >= 10){
      for (var i=0; i<tamanho; i++) {
        string.split("");
        pass += string[Math.floor(Math.random() * string.length)];
      }
      document.getElementById("copiar").style.display = "block";
      document.getElementById("valorr").innerText = pass;
    }
  })
}

document.getElementById("copiar").addEventListener("click", function copy(){
  document.getElementById("valorr").select();
  document.getElementById("valorr").setSelectionRange(0,9999);
  document.execCommand("copy");
  alert("Copiado com sucesso!");
})


createPass();
