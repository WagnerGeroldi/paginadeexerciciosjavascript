function elementoNovo(evento) {
    const newElement = document.createElement('div')
    newElement.classList.add('div')
    const textElement = document.createTextNode(verificarHorario())
    newElement.appendChild(textElement)
    const objAtual = document.getElementById('main')
    document.body.insertBefore(newElement, objAtual)
    document.body.onload = elementoNovo
}

function verificarHorario() {
    const horarioDia = '12'
    const horarioNoite = '19'
    const hora = new Date()
    if (hora.getHours() >= horarioNoite) {
       saudacao = 'Boa Noite humano'
    }
    else if (hora.getHours() >= horarioDia) {
        saudacao =  'Boa Tarde humano'
    }
    else {
        saudacao =  'Bom Dia humano'
    }
    return saudacao
}