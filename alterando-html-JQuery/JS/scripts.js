function adicionarClasse() {
    $('.card-1').addClass('mudarfundo')
}
function removerClasse() {
    $('.card-1').removeClass('mudarfundo')
}
function selectFirst() {
    $('li:first').css('border-bottom', 'white 3px solid')
}
function selectAll() {
    $('li').css('border-bottom', 'white 3px solid')
}
function SelectContainsR() {
    $('li:contains("r")').css('background', 'white')
}