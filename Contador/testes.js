function clicar() {
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('Final')
    var pular = document.getElementById('pular')

    var ini = Number(inicio.value)
    var fim = Number(final.value)
    var pulo = Number(pular.value)
    var res = document.getElementById('res')


    for(c = 1; c <= fim; c += pulo){
        res.innerHTML += (`${c} `)
    }

}
