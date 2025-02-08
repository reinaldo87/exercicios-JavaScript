const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const botao = document.querySelector("#botaocopiar")
const todos = [...document.querySelectorAll(".curso")]

todos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
    })
})

botao.addEventListener("click",()=>{
    const cursoselecionado=[...document.querySelectorAll(".selecionado")]
    const cursosnaoelecionado=[...document.querySelectorAll(".curso:not(.selecionado)")]
    cursoselecionado.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosnaoelecionado.map((el)=>{
        caixa1.appendChild(el)
    })
})
