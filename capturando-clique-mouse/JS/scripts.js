let cliques = 0
$('.card-1').click(e => {
    $('.texto').html(`Cliques: ${++cliques}`)
})