var colors = {
  grass: "#66e85d",
  poison: "#c165f0",
  fire: "#f06565",
  water: "#6fb0ed",
  rock: "#b36e00",
  ground: "#f5be67",
  electric: "#f0f567",
  flying: "#91918e",
  fighting: "#ed9a66",
  normal: "#c4bebb",
  fairy: "#faaaf6",
  psychic: "#f28fdd",
  bug: "#bdc908",
  ice: "#84e8e6",
  steel: "#b0adac",
  ghost: "#3e1f4f",
  dragon: "#e3701e"
}

window.onload = async function addPokemon() {

  try {
    for (let i=1; i<=151; i++) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let data = await response.json();

      let div = document.createElement("div");
        div.classList.add("pokemon");

      var nome_p = document.createElement("p");
        nome_p.id = "nome";
      var numero_p = document.createElement("p");
        numero_p.id = "numero";
      var img = new Image;

      div.append(numero_p, img, nome_p);
      document.querySelector(".lista").append(div);

      document.querySelector(`.lista .pokemon:nth-child(${i}) #numero`).innerText = `#${i}`; // Adiciona o número do pokemon da Pokedex
      document.querySelector(`.lista .pokemon:nth-child(${i}) img`).src = `img/sprites/${i}.svg`; // Adiciona a foto do pokémon
      document.querySelector(`.lista .pokemon:nth-child(${i}) #nome`).innerText = data.name; // Adiciona o nome do pokémon

      document.querySelector(`.lista .pokemon:nth-child(${i})`).addEventListener("click", function(){
        getType(i);
      })
      document.querySelector(".container_status").addEventListener("click", function(){
        document.querySelector(".container_status").style.display = "none";
      })

    }
  }
  catch (err) {
    console.log("Algo deu errado!")
  }

}

async function getType(num) {

    let response_num = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    let data_num = await response_num.json();

    let response_flavor = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
    let data_flavor = await response_flavor.json();

    document.querySelector(".container_status").style.display = "flex";
    document.querySelector(".container_body img").src = `img/sprites/${num}.svg`;

    if (data_num.id == num) {
      if (data_num.types[0]) {
        document.querySelector(".grid_type div:nth-child(1)").innerText = data_num.types[0].type.name;
        document.querySelector(".grid_type div:nth-child(1)").style.backgroundColor = colors[data_num.types[0].type.name];
        document.getElementById("nome_status").innerText = data_num.name;
        document.getElementById("icone_status").src = `img/icons/${num}.png`;
        document.getElementById("flavor_status").innerText = `"${data_flavor.flavor_text_entries[7].flavor_text.replace(/\n/g, " ")}"`;
        document.getElementById("peso_status").innerText = `Weight: ${data_num.weight}kg`;
        document.getElementById("habilidade_status").innerText = `Ability: ${data_num.abilities[0].ability.name}`;
        for (var i=0; i<6; i++) {
          document.querySelector(`.gridStatus p:nth-child(${i+1})`).innerText = data_num.stats[i].stat.name + ": " + data_num.stats[i].base_stat;
        }
      }
      if (data_num.types[1]) {
        document.querySelector(".grid_type div:nth-child(2)").innerText = data_num.types[1].type.name;
        document.querySelector(".grid_type div:nth-child(2)").style.backgroundColor = colors[data_num.types[1].type.name];
      }
      else {
        document.querySelector(".grid_type div:nth-child(2)").innerText = "";
        document.querySelector(".grid_type div:nth-child(2)").style.backgroundColor = "white";
      }
    }
}
