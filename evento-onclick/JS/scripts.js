function goIn5s(evento) {
    evento.preventDefault()
    setTimeout(
        () => {
            const link = evento.target;
            window.location.href = link.href
        }, 5000)
    alert('Indo para o google em 5 segundos')
}
/* modo 1 */

const teste2 = document.querySelector('[esperar-5segundos]')
teste2.onclick = goIn5s
/* modo 2 */