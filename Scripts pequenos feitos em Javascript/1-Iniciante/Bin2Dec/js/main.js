document.getElementById("transformar").addEventListener("click", function checkBin(){
  var bin_correct = true;
  var value = document.getElementById("binario").value;
  if (value === '') {return alert('CARACTERES INVÁLIDOS, POR FAVOR, REMOVA-OS');};
  value.split("").map((char) => {
    if(char !== "0" && char !== "1") {
      bin_correct = false;
      alert("SERÃO ACEITOS SOMENTES 0 e 1");
  }
  })
  if (bin_correct) {
    document.getElementById("resultado").innerText = parseInt(Number(document.getElementById("binario").value), 2);
}
});
