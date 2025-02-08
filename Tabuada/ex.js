function somar(){
    var numero = document.getElementById('num')
    var res = document.getElementById('tabuada')

    if (numero.value.length == 0){
        window.alert('Por favor, Digite um numero!')
    } else{
        
        var num = Number(numero.value)
        var c = 1
        res.innerHTML = ''
        
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            res.appendChild(item)
            c++
        }
    }

}