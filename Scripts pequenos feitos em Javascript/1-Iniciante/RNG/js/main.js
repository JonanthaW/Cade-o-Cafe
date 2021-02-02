function getValues() {
	let minimun = Number(document.getElementById("minimun").value);
	let maximun = Number(document.getElementById("maximun").value);
	
	if (minimun == " " ) { minimun = 0 };
	if (maximun == " ") { maximun = 1000000 };
	

	if (document.getElementById("decimal").checked) {
		document.getElementById("gerado").innerText = Math.floor(Math.random() * maximun) + (minimun + 1);
	}
	else {
		document.getElementById("gerado").innerText = (Math.random() * maximun) + (minimun + 1);
	}
}


document.querySelector(".values button").addEventListener("click", getValues);