window.onload = function getURL() {
  document.getElementById("buscar").addEventListener("click", async function(){
    try {
      var url = "https://api.github.com/users/" + document.getElementById("usuario").value;
      var response = await fetch(url);
      var data = await response.json();

      if (data.message == "Not Found") {
        alert("Este usuário não existe. Cheque se digitou o nome corretamente!");
      }
      else {
        document.querySelector(".usuario").style.display = "flex";
        document.getElementById("foto").src = data.avatar_url;
        if (data.site_admin) {
            document.getElementById("login").innerText = "🛡️ " + data.login;
        }
        else {
            document.getElementById("login").innerText = data.login;
        }
        document.getElementById("nome").innerText = data.name
        if (data.bio == null) {
            document.getElementById("bio").innerText = "Nobody here, but us chickens!"
        }
        else {
            document.getElementById("bio").innerText =  `" ${data.bio} "`;
        }
        document.getElementById("criado").innerText =  `Criado: ${data.created_at}`;
        document.getElementById("local").innerText =  `Local: ${data.location}`;
        document.getElementById("seguidores").innerText =  `Seguidores: ${data.followers}`;
        document.getElementById("repositorios").innerText =  `Repositorios: ${data.public_repos}`;
        document.getElementById("repos_lista").innerText = "4 primeiros repos";

        var url_repos = `https://api.github.com/users/${document.getElementById("usuario").value}/repos`;
        var response_repos = await fetch(url_repos);
        var data_repos = await response_repos.json();
        if (data_repos == "") {
          document.getElementById("repos_lista").innerText = "";
        }
        else {
        for(var i=0; i<4; i++) {
          var novaA = document.createElement("a");
          var novaLI = document.createElement("li");
          novaLI.appendChild(novaA);
          novaA.innerText = data_repos[i].name;
          novaA.href = data_repos[i].html_url;
          novaA.target = "_blank";
          document.getElementById("repos_lista").append(novaLI);
        }
      }
    }
    }
    catch(err) {
      alert("Ops! Algo deu errado :c, Tente recarregar a página!")
    }
  })
}


// Change vision_mode

function visionType(dark_mode) {
  document.getElementById("vision_mode").addEventListener("click", ()=>{

    if (dark_mode == false) {
      document.body.style.backgroundColor = "#333333";
      document.querySelector("header").style.backgroundColor = "#111";
      document.getElementById("vision_mode").innerText = "🌞";
      document.getElementById("foto").style.borderColor = "snow";
      document.getElementById("repos_lista").style.color = "snow";
      for (var i=1; i<=6; i++) {
        document.querySelector(`.usuario p:nth-child(${i})`).style.color = "snow";
      }
      dark_mode = true;
      }
    else {
      document.body.style.backgroundColor = "white";
      document.querySelector("header").style.backgroundColor = "#176a84";
      document.getElementById("vision_mode").innerText = "🌙";
      document.getElementById("foto").style.borderColor = "lightblue";
      document.getElementById("repos_lista").style.color = "#444242";
      for (var i=1; i<=6; i++) {
        document.querySelector(`.usuario p:nth-child(${i})`).style.color = "#444242";
      }
      dark_mode = false;
    }
  })
}

visionType(false);
