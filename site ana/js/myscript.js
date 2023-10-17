function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/images.jpg\' />"
}
function trocarTexto(){
    var elemento = document.getElementById("frase")
    var nova= document.gebi("novaFrase").value

    elemento.innerHTML = nova
}

function gebi(id){
    return document.getElementById(id)
}