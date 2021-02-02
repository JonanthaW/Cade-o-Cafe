window.onload = function gerarParagrafo() {
  document.getElementById("gerar").addEventListener("click", ()=>{
    try {
      document.querySelector(".containerTexto").innerText = "";
      let paragrafos = Number(document.getElementById("paragrafos").value);
      if (paragrafos === 0) {
        gerarTexto(2);
      }
      else if (isNaN(paragrafos)) {
        window.alert(`'${document.getElementById("paragrafos").value}' não é um número!`);
      }
      else {
        gerarTexto(paragrafos);
      }
    }
    catch (err) {
      alert("Ops, algo deu errado! Tente recarregar a página!");
    }
  })
}


function gerarTexto(valor) {

  const escolhaRandom =  [ "a", "ac", "accumsan", "ad", "adipiscing", "aenean", "aenean", "aliquam", "aliquam", "aliquet", "amet", "ante", "aptent", "arcu", "at", "auctor", "augue", "bibendum", "blandit", "class", "commodo", "condimentum", "congue", "consectetur", "consequat", "conubia", "convallis", "cras", "cubilia", "curabitur", "curabitur", "curae", "cursus", "dapibus", "diam", "dictum", "dictumst", "dolor", "donec", "donec", "dui", "duis", "egestas", "eget", "eleifend", "elementum", "elit", "enim", "erat", "eros", "est", "et", "etiam", "etiam", "eu", "euismod", "facilisis", "fames", "faucibus", "felis", "fermentum", "feugiat", "fringilla", "fusce", "gravida", "habitant", "habitasse", "hac", "hendrerit", "himenaeos", "iaculis", "id", "imperdiet", "in", "inceptos", "integer", "interdum", "ipsum", "justo", "lacinia", "lacus", "laoreet", "lectus", "leo", "libero", "ligula", "litora", "lobortis", "lorem", "luctus", "maecenas", "magna", "malesuada", "massa", "mattis", "mauris", "metus", "mi", "molestie", "mollis", "morbi", "nam", "nec", "neque", "netus", "nibh", "nisi", "nisl", "non", "nostra", "nulla", "nullam", "nunc", "odio", "orci", "ornare", "pellentesque", "per", "pharetra", "phasellus", "placerat", "platea", "porta", "porttitor", "posuere", "potenti", "praesent", "pretium", "primis", "proin", "pulvinar", "purus", "quam", "quis", "quisque", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien", "scelerisque", "sed", "sem", "semper", "senectus", "sit", "sociosqu", "sodales", "sollicitudin", "suscipit", "suspendisse", "taciti", "tellus", "tempor", "tempus", "tincidunt", "torquent", "tortor", "tristique", "turpis", "ullamcorper", "ultrices", "ultricies", "urna", "ut", "ut", "varius", "vehicula", "vel", "velit", "venenatis", "vestibulum", "vitae", "vivamus", "viverra", "volutpat", "vulputate", 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero','eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut','orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia','a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros','dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa','volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus','quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus','at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam','tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in','hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque','fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada','rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam','suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat','donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante','primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae','etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl','feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu','ad', 'litora', 'torquent', 'per', 'conubia', 'nostra','inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae','urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu','morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis','felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis','sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam','bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi','fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus','netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus','elementum', 'tempor', 'risus', 'cras'];
  var frase = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";

  for (let j=0; j<valor; j++) {
    for (let i=0; i<Math.floor(Math.random() * escolhaRandom.length) + 50; i++) {
      frase += " " + escolhaRandom[Math.floor(Math.random() * escolhaRandom.length)];
    }
    document.querySelector(".containerTexto").innerHTML += frase + ".\n\n";
    frase = "";
  }

  document.getElementById("copiar").style.display = "block";

  document.getElementById("copiar").addEventListener("click", ()=>{
      document.querySelector(".containerTexto").select();
      document.querySelector(".containerTexto").setSelectionRange(0,9999);
      document.execCommand("copy");
      alert("Copiado com sucesso!");
  })
}
