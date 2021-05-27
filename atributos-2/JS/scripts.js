const box = document.querySelector('.card')
function trocarClassCard1() {
    box.setAttribute('class', 'cardalterado') //nome do atributo > texto do atributo
}
function trocarClassCard2() {
    box.nextElementSibling.setAttribute('class', 'cardalterado') //nome do atributo > texto do atributo
}
function removerClassGeral() {
    box.setAttribute ('class', 'card')
    box.nextElementSibling.setAttribute('class', 'card')
}