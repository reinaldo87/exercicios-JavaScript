let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adcionar(){
    if (isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adcionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}


function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} numeros cadrastados. </p>`
        res.innerHTML += `<p> o maior valor encontrado foi ${maior}. </p>`
        res.innerHTML += `<p> o menor valor encontrado foi ${menor}. </p>`
        res.innerHTML += `<p> somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p> a media dos valores digitados é ${media}. </p>`
    }
}