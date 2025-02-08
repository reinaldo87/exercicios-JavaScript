let valor1 = document.getElementById("valor1")
let valor2 = document.getElementById("valor2")
const maior = document.querySelector("#maior")
const menor = document.querySelector("#menor")
const vezes = document.querySelector("#vezes")
const dividir = document.querySelector("#dividir")
const res = document.querySelector("#res")

maior.addEventListener("click",()=>{
    res.innerHTML = `Resultado: ${Number(valor1.value)+Number(valor2.value)}`
})

menor.addEventListener("click",()=>{
    res.innerHTML = `Resultado: ${Number(valor1.value)-Number(valor2.value)}`
})
vezes.addEventListener("click",()=>{
    res.innerHTML = `Resultado: ${Number(valor1.value) * Number(valor2.value)}`
})
dividir.addEventListener("click",()=>{
    res.innerHTML = `Resultado: ${Number(valor1.value) / Number(valor2.value)}`
})