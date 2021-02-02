var cartas_em_mesa = false;
var escolha_jogador = "";
var escolha_computador = "";
var vidas_jogador = 8000;
var vidas_computador = 8000;

$("#computador_vida_texto").text(vidas_computador);
$("#jogador_vida_texto").text(vidas_jogador);

$("#carta_1_jogador").mouseover(function () {
  $("#carta_zoom_jogador").css("background-image", "url('img/pedra.png')");
})
$("#carta_2_jogador").mouseover(function () {
  $("#carta_zoom_jogador").css("background-image", "url('img/papel.png')");
})
$("#carta_3_jogador").mouseover(function () {
  $("#carta_zoom_jogador").css("background-image", "url('img/tesoura.png')");
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$("#carta_1_jogador").click(async function () {
  if (cartas_em_mesa == false) {
    $("#carta_zoom_jogador").css("background-image", "url('img/pedra.png')");
    var escolha_jogador = "pedra";
    var escolha_computador = Math.floor(Math.random() * 3) + 1;

    switch (escolha_computador) {
      case 1: // Pedra
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css({"background-image":"url('img/pedra.png')", "left":"30%"});
        $("#carta_zoom_jogador").css("left", "54%");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_normal.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_normal.png");
        await sleep(650);
        $("#carta_zoom_computador").css("left", "8%");
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 2: // Papel
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css({"background-image":"url('img/papel.png')", "left":"42%"});
        $("#img_computador").attr("src", "img/faces_computador/face_computador_ataque.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_dano.png");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_jogador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#jogador_vida_texto").text(vidas_jogador);
        }
        $("#carta_zoom_computador").css("left", "8%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 3: // Tesoura
        cartas_em_mesa = true;
        $("#carta_zoom_jogador").css({"background-image":"url('img/pedra.png')", "left":"42%"});
        $("#carta_zoom_computador").css("background-image", "url('img/tesoura.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_dano.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_ataque.png");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_computador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#computador_vida_texto").text(vidas_computador);
        }
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;
    }
    cartas_em_mesa = false;
  }
})


$("#carta_2_jogador").click(async function () {
  if (cartas_em_mesa == false) {
    $("#carta_zoom_jogador").css("background-image", "url('img/papel.png')");
    var escolha_jogador = "papel";
    var escolha_computador = Math.floor(Math.random() * 3) + 1;

    switch (escolha_computador) {
      case 1: // Pedra
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/pedra.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_dano.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_ataque.png");
        $("#carta_zoom_jogador").css("left", "42%");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_computador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#computador_vida_texto").text(vidas_computador);
        }
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 2: // Papel
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/papel.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_normal.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_normal.png");
        $("#carta_zoom_computador").css("left", "30%");
        $("#carta_zoom_jogador").css("left", "54%");
        await sleep(650);
        $("#carta_zoom_computador").css("left", "8%");
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 3: // Tesoura
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/tesoura.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_ataque.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_dano.png");
        $("#carta_zoom_computador").css("left", "42%");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_jogador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#jogador_vida_texto").text(vidas_jogador);
        }
        $("#carta_zoom_computador").css("left", "8%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;
    }
    cartas_em_mesa = false;
  }
})

$("#carta_3_jogador").click(async function () {
  if (cartas_em_mesa == false) {
    $("#carta_zoom_jogador").css("background-image", "url('img/tesoura.png')");
    var escolha_jogador = "tesoura";
    var escolha_computador = Math.floor(Math.random() * 3) + 1;

    switch (escolha_computador) {
      case 1: // Pedra
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/pedra.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_ataque.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_dano.png");
        $("#carta_zoom_computador").css("left", "42%");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_jogador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#jogador_vida_texto").text(vidas_jogador);
        }
        $("#carta_zoom_computador").css("left", "8%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 2: // Papel
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/papel.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_dano.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_ataque.png");
        $("#carta_zoom_jogador").css("left", "42%");
        await sleep(1000);
        for (var dano = 500; dano>0; dano--) {
          vidas_computador -= 4;
          await sleep(Math.floor(Math.random() * .9) + .1);
          $("#computador_vida_texto").text(vidas_computador);
        }
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;

      case 3: // Tesoura
        cartas_em_mesa = true;
        $("#carta_zoom_computador").css("background-image", "url('img/tesoura.png')");
        $("#img_computador").attr("src", "img/faces_computador/face_computador_normal.png");
        $("#img_jogador").attr("src", "img/faces_jogador/face_jogador_normal.png");
        $("#carta_zoom_computador").css("left", "30%");
        $("#carta_zoom_jogador").css("left", "54%");
        await sleep(650);
        $("#carta_zoom_computador").css("left", "8%");
        $("#carta_zoom_jogador").css("left", "73%");
        await sleep(1000);
        $("#carta_zoom_jogador").css("background-image", "url('img/costas-cartas.png')");
        $("#carta_zoom_computador").css("background-image", "url('img/costas-cartas.png')");
        break;
      }
      cartas_em_mesa = false;
    }
  })
