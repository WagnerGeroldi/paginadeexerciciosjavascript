let lista = document.querySelector('div ul')
        let primeiro = lista.firstElementChild
        let segundo = primeiro.nextElementSibling
        let ultimo = lista.lastElementChild
        
        function clickWagner() {
         primeiro.classList.add('modify')
        }
        function clickTanise() {
            segundo.classList.add('modify')
        }
        function clickPietro() {
            ultimo.classList.add('modify')
        }
        function apagar() {
            primeiro.classList.remove('modify')
            segundo.classList.remove('modify')
            ultimo.classList.remove('modify')
        }