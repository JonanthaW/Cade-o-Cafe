var palavra = document.getElementById("palavra_escolhida");
// Palavras que podem aparecer \/
var palavra_random = ["ESCOLHA", "PASTEL", "BOLA", "GATO", "HOTEL", "FATO", "VIDA", "LIVRO", "CANTO", "PEDRO", "MARIO", "NUVEM",
"FILME", "VENTILADOR"];
var palavra_escolhida = palavra_random[Math.floor(Math.random() * palavra_random.length-1)]; // Escolhe uma das palavras aleatóriamente
var quantia_letras = palavra_escolhida.length-1; // Pega a quantia de letras da palavra
var palavra_embaralhada = "";
var chances = 5;

document.getElementById("letras_utilizadas").innerText = "letras utilizadas:  ";

for(var i=0; i<=quantia_letras; i++) { // Troca todas as letras por "_"
  var embaralhando = palavra_escolhida[i].replace(palavra_escolhida[i], "_");
  palavra_embaralhada += embaralhando;
}

palavra.innerText = palavra_embaralhada;

document.getElementById("letraA").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "A") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "A") { // Caso encontre um "A" na palavra
  var dividindo = palavra_embaralhada.split(""); // Dividesse esta palavra em várias letras
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "A"); // Adiciona a letra em questão, "A", no espaço equivalente
  palavra_embaralhada = dividindo.join(""); // Uni-se novamente as letras em uma única palavra;
  palavra.innerText = palavra_embaralhada; // Manda a palavra para o usuário
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " A,";
  document.getElementById("letraA").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraB").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "B") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "B") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "B");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " B,";
  document.getElementById("letraB").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraC").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "C") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "C") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "C");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " C,";
  document.getElementById("letraC").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraD").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "D") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "D") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "D");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " D,";
  document.getElementById("letraD").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraE").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "E") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "E") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "E");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " E,";
  document.getElementById("letraE").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraF").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "F") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "F") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "F");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " F,";
  document.getElementById("letraF").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraG").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "G") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "G") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "G");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " G,";
  document.getElementById("letraG").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraH").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "H") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "H") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "H");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " H,";
  document.getElementById("letraH").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraI").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "I") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "I") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "I");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " I,";
  document.getElementById("letraI").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraJ").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "J") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "J") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "J");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " J,";
  document.getElementById("letraJ").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraK").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "K") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "K") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "K");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " K,";
  document.getElementById("letraK").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraL").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "L") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "L") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "L");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " L,";
  document.getElementById("letraL").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraM").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "M") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "M") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "M");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " M,";
  document.getElementById("letraM").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraN").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "N") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "N") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "N");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " N,";
  document.getElementById("letraN").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraO").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "O") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "O") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "O");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " O,";
  document.getElementById("letraO").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraP").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "P") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "P") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "P");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " P,";
  document.getElementById("letraP").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraQ").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "Q") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "Q") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "Q");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " Q,";
  document.getElementById("letraQ").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraR").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "R") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "R") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "R");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " R,";
  document.getElementById("letraR").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraS").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "S") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "S") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "S");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " S,";
  document.getElementById("letraS").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraT").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "T") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "T") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "T");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " T,";
  document.getElementById("letraT").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraU").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "U") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "U") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "U");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " U,";
  document.getElementById("letraU").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraV").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "V") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "V") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "V");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " V,";
  document.getElementById("letraV").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraX").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "X") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "X") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "X");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " X,";
  document.getElementById("letraX").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});

document.getElementById("letraZ").addEventListener("click", ()=>{
  let contagem;
  for(j=0; j<=quantia_letras; j++){
    if (palavra_escolhida[j] == "Z") {
      contagem = j;
  }
}
if (palavra_escolhida[contagem] == "Z") {
  var dividindo = palavra_embaralhada.split("");
  dividindo.splice(palavra_escolhida.indexOf(palavra_escolhida[contagem]), 1, "Z");
  palavra_embaralhada = dividindo.join("");
  palavra.innerText = palavra_embaralhada;
  if (palavra_escolhida == palavra_embaralhada) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("venceu").style.display = "flex";
  }
}
else {
  chances--;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText += " Z,";
  document.getElementById("letraZ").style.display = "none";
  if (chances == 0) {
    document.getElementById("telas").style.display = "flex";
    document.getElementById("perdeu").style.display = "flex";
  }
}
});


document.getElementById("continuar").addEventListener("click", ()=>{
  $("#venceu, #perdeu, #telas").css("display", "none");
  palavra_escolhida = palavra_random[Math.floor(Math.random() * palavra_random.length-1)];
  quantia_letras = palavra_escolhida.length-1;
  palavra_embaralhada = "";
  chances = 5;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText = "letras utilizadas:  ";

  for(var i=0; i<=quantia_letras; i++) { // Troca todas as letras por "_"
    var embaralhando = palavra_escolhida[i].replace(palavra_escolhida[i], "_");
    palavra_embaralhada += embaralhando;
  }

  palavra.innerText = palavra_embaralhada;
  $(".letras button").css("display", "flex");
})

document.getElementById("reiniciar").addEventListener("click", ()=>{
  $("#venceu, #perdeu, #telas").css("display", "none");
  palavra_escolhida = palavra_random[Math.floor(Math.random() * palavra_random.length-1)];
  quantia_letras = palavra_escolhida.length-1;
  palavra_embaralhada = "";
  chances = 5;
  document.getElementById("bolo").src = `img/bolo/${chances}.png`;
  document.getElementById("letras_utilizadas").innerText = "letras utilizadas:  ";

  for(var i=0; i<=quantia_letras; i++) { // Troca todas as letras por "_"
    var embaralhando = palavra_escolhida[i].replace(palavra_escolhida[i], "_");
    palavra_embaralhada += embaralhando;
  }
  palavra.innerText = palavra_embaralhada;
  $(".letras button").css("display", "flex");
})
