
document.querySelector('#primeiro').classList.add('destaque')

function eventoAdicionar() {
    document.querySelector('.terceiro').classList.add('destaque')
}

function eventoRemover() {
    document.querySelector('.destaque.ultimo').classList.remove('destaque')
}
