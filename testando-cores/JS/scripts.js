$('input').keyup(
    function () {
        const cor = $(this).val()
        $('.card-2').css('background', cor).css('transition', '0.9s')
    })

function modoEscuro() {
    $('body').css('background', 'black')
    $('header, footer').css('background', 'darkgreen')
    $('header').css('background', 'darkgreen').css('border-bottom', 'limegreen 3px solid')
    $('footer').css('background', 'darkgreen').css('border-top', 'limegreen 3px solid')
    $('.explicacao').css('background', 'black')
    $('*').css('color', 'white').css('transition', '1s')
    $('input').css('background', 'black').css('border', 'limegreen 3px solid')
    $('button, a').css('background', 'darkgreen')
    $('.card-2').css('border', 'darkgreen 5px solid')
}

function modoClaro(e) {
    const normal = document.location.reload(true)
    return normal
}