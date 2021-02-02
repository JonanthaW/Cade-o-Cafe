function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function data(){
  var Hora = new Date();
  var Dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta" , "Sabado", "Domingo"];
  var Meses = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
  var Dia = Dias[Hora.getDay()];
  var DiaN = Hora.getDate();
  var Horas = Hora.getHours();
  var Minutos = Hora.getMinutes();
  var Segundos= Hora.getSeconds();
  var Mes = Meses[Hora.getMonth()];
  var Ano = Hora.getFullYear();

  if(Horas < 10){
    Horas = "0"+Horas;
  }
  if(Minutos < 10){
    Minutos = "0"+Minutos;
  }

  if(Horas>1 && Horas<12){
    document.getElementById('HorarioAtual').innerHTML = "Bom dia!";
    document.body.style.backgroundImage = "url('manha.gif')"
  }

  else if(Horas>=12 && Horas<=17){
    document.getElementById('HorarioAtual').innerHTML = "Boa tarde!";
    document.body.style.backgroundImage = "url('tarde.gif')"
  }

  else if(Horas>17 && Horas<=23){
    document.getElementById('HorarioAtual').innerHTML = "Boa noite!";
    document.body.style.backgroundImage = "url('noite.gif')"
  }

  document.body.style.backgroundSize = "cover";
  document.getElementById('HoraReal').innerText =  "Hoje é "+ Dia;
  document.getElementById('Data').innerText =  DiaN +" de "+ Mes +" de "+ Ano;

  while(Segundos<=59){
    Segundos+=1;
    document.getElementById('Hora').innerHTML = Horas + ":" + Minutos + ":" + Segundos;
    await sleep(1000);
    if(Segundos==59){
      Segundos=0;
      Minutos++;
      if(Minutos==59){
        Horas++;
        if(Horas==12)
          Horas=0;
      }
    }
  }

}
