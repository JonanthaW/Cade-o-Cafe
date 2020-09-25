function nomesemul(){
  var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']

  for(var i=0; i<deuses.length; i++){
    document.getElementById('nomes').innerHTML  += "<li>"+deuses[i]+"</li>";
  }

}
