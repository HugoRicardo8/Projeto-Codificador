function codificar (texto){
	texto = texto.replace(/a/g, "ado").replace(/e/g, "eci").replace(/i/g, "ifa").replace(/o/g, "ota").replace(/u/g, "uno");
	
	return texto;
}

function decodificar (texto) {
	texto = texto.replace(/ado/g, "a").replace(/eci/g, "e").replace(/ifa/g, "i").replace(/ota/g, "o").replace(/uno/g, "u");
	
	return texto;
}


function letraMinuscula (entrada) {
	var retorno = false;
	if (entrada.toLowerCase() != entrada) {
		window.confirm("Digite um texto com letras minúsculas e sem acentos");
		retorno = true;
	}
}

document.getElementById("botaoCriptografar").addEventListener("click", function (enent) {
	event.preventDefault();
	var textoCodificado = document.getElementById("input-texto").value;
	if (letraMinuscula(textoCodificado)) {
		return ;
	}
	document.getElementById("msg").value = codificar(textoCodificado);
})



document.getElementById("botaoDescriptografar").addEventListener("click", function (enent) {
	event.preventDefault();
	var textoCodificado = document.getElementById("input-texto").value;
	if (letraMinuscula(textoCodificado)) {
		return ;
	}
	document.getElementById("msg").value = decodificar(textoCodificado);
})











