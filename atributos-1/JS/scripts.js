function trocarTextoComNodeValue() {

    const texto = document.querySelector('.texto')
    texto.firstChild.nodeValue = "Troquei de lugar com ele"
}

function trocarTextoComInnerHTML() {

    const texto = document.querySelector('.texto-box-two')
    texto.innerHTML = "Oi, eu também funciono :)"
}


