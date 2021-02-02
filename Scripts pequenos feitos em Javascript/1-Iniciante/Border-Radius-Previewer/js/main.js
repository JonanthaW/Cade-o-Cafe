var top_left = 0;
var top_right = 0;
var bottom_left = 0;
var bottom_right = 0;
var radius_top = 0;
var radius_bottom = 0;
var radius_left = 0;
var radius_right = 0;

function sentRadius(){
     top_left = Number(document.getElementById("top_left").value);
     top_right = Number(document.getElementById("top_right").value);
     bottom_left = Number(document.getElementById("bottom_left").value);
     bottom_right = Number(document.getElementById("bottom_right").value);
     radius_top = Number(document.getElementById("radius_top").value);
     radius_bottom = Number(document.getElementById("radius_bottom").value);
     radius_left = Number(document.getElementById("radius_left").value);
     radius_right = Number(document.getElementById("radius_right").value);
     document.getElementById("retangle").style.borderRadius = `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px / ${radius_bottom}px ${radius_top}px ${radius_right}px ${radius_left}px`;
}

window.onload = sentRadius();

document.getElementById("top_left").addEventListener("mousemove", ()=>{
    top_left = Number(document.getElementById("top_left").value);
    sentRadius();
});

document.getElementById("top_right").addEventListener("mousemove", ()=>{
    top_right = Number(document.getElementById("top_right").value);
    sentRadius();
});

document.getElementById("bottom_left").addEventListener("mousemove", ()=>{
    bottom_left = Number(document.getElementById("bottom_left").value);
    sentRadius();
});

document.getElementById("bottom_right").addEventListener("mousemove", ()=>{
    bottom_right = Number(document.getElementById("bottom_right").value);
    sentRadius();
});

document.getElementById("radius_top").addEventListener("mousemove", ()=>{
    radius_top = Number(document.getElementById("radius_top").value);
    sentRadius();
});

document.getElementById("radius_bottom").addEventListener("mousemove", ()=>{
    radius_bottom = Number(document.getElementById("radius_bottom").value);
    sentRadius();
});

document.getElementById("radius_left").addEventListener("mousemove", ()=>{
    radius_left = Number(document.getElementById("radius_left").value);
    sentRadius();
});

document.getElementById("radius_right").addEventListener("mousemove", ()=>{
    radius_right = Number(document.getElementById("radius_right").value);
    sentRadius();
});



document.getElementById("copy").addEventListener("click", ()=>{
  try {
  var textCopy = document.getElementById("retangle").style.borderRadius = `${top_left}px ${top_right}px ${bottom_right}px ${bottom_left}px / ${radius_bottom}px ${radius_top}px ${radius_right}px ${radius_left}px`;
  document.querySelector("textarea").innerText = textCopy;
  var textCopied = document.querySelector("textarea");
  textCopied.select();
  textCopied.setSelectionRange(0,9999);
  document.execCommand("copy");
  alert("Copied!");
  }
  catch(err) {
    alert("Something went wrong!")
  }
})
