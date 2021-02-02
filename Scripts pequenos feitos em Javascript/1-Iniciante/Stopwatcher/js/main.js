var running_watcher = false;
var hours = (00).toLocaleString('pt-BR', {minimumIntegerDigits: 2});
var minutes = (00).toLocaleString('pt-BR', {minimumIntegerDigits: 2});
var seconds = (00).toLocaleString('pt-BR', {minimumIntegerDigits: 2});
var lap = 1;
$(document).ready(function contols_button() {
  $("#hour").text(`${hours}:${minutes}:${seconds}`);
  $("#start").click( function(){
    running_watcher = true;
    $("#start").css("display", "none");
    $("#restart, #stop, #lap, #clear_lap").css("display", "block");
    count_timer();
  })
  $("#stop").click(function(){
    running_watcher = false;
    $("#stop").css("display", "none");
    $("#start").css({"display":"block", "left":"49%", "border-top-right-radius":"20px", "border-bottom-right-radius":"20px"});
    $("#start").text("CONTINUE");
  })
  $("#restart").click(function(){
    $("#hour").text(`${(hours = 0).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(minutes = 0).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(seconds = 0).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`);
  })
  $("#lap").click(add_lap);
  $("#clear_lap").click(function(){
    lap = 1;
    $(".laps").text("");
  })
}
)

function add_lap(){
  var span = document.createElement("span");
  span.innerText = `lap ${lap} - ${(hours).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(minutes).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(seconds).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`;
  $(".laps").append(span);
  lap++;
}

function count_timer() {
  if (running_watcher === true) {
    if (seconds == 60) {
      seconds = 00;
      if (minutes == 60) {
        minutes = 00;
        hours++;
      }
      minutes++;
    }
    seconds++;
    if(hours == 00 && seconds == 00 && minutes == 00) {
      running_watcher = false;
    }
    else {
      setTimeout(count_timer, 1000);
    }
    $("#hour").text(`${(hours).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(minutes).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}:${(seconds).toLocaleString('pt-BR', {minimumIntegerDigits: 2})}`);
  }
}
