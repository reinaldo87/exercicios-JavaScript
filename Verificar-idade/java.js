function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('tnum')
    var idade = ano - Number(fano.value)
    var res = document.getElementById('resp')
    var sexo = document.getElementsByName('sexo')
    var genero = ''
    
    const imagem = document.getElementById('foto')
    imagem.style.width = '230px'
    imagem.style.height = '230px'

   
    if (sexo[0].checked){
            genero = 'homem'
            if (idade <= 0 ){
                window.alert('[ERRO] DIGITE O ANO DE NASCIMENTO CORRETAMENTE')
                imagem.src = 'https://imgs.search.brave.com/Mh5il7ENSs-uVDy0AyYsK6q_iCAhWePl_zYHEys0u5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU4/MjA4Njg0NC9wdC92/ZXRvcmlhbC95ZWxs/b3ctYXR0ZW50aW9u/LXNpZ24td2l0aC1l/eGNsYW1hdGlvbi1t/YXJrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PNF9fMU4x/Mmh6YVVWYXZoaWZy/U21MVjVsUk1iVE9j/VHVTRzByZWRrX0tn/PQ'
               
            }
            else if (idade > 0 && idade <= 10){
                imagem.src = 'https://images.pexels.com/photos/208134/pexels-photo-208134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }

            else if (idade <= 21){
                imagem.src = 'https://images.pexels.com/photos/29455482/pexels-photo-29455482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else if (idade <= 50){
                imagem.src = 'https://images.pexels.com/photos/3139606/pexels-photo-3139606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else if (idade < 100){
                imagem.src = 'https://images.pexels.com/photos/2774292/pexels-photo-2774292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else {
                window.alert('[ERRO] DIGITE O ANO DE NASCIMENTO CORRETAMENTE')
                imagem.src = 'https://imgs.search.brave.com/Mh5il7ENSs-uVDy0AyYsK6q_iCAhWePl_zYHEys0u5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU4/MjA4Njg0NC9wdC92/ZXRvcmlhbC95ZWxs/b3ctYXR0ZW50aW9u/LXNpZ24td2l0aC1l/eGNsYW1hdGlvbi1t/YXJrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PNF9fMU4x/Mmh6YVVWYXZoaWZy/U21MVjVsUk1iVE9j/VHVTRzByZWRrX0tn/PQ'
                
            }
        }

 
        else if (sexo[1].checked){
            genero = 'mulher'
            if (idade <= 0 ){
                window.alert('[ERRO] DIGITE O ANO DE NASCIMENTO CORRETAMENTE')
                imagem.src = 'https://imgs.search.brave.com/Mh5il7ENSs-uVDy0AyYsK6q_iCAhWePl_zYHEys0u5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU4/MjA4Njg0NC9wdC92/ZXRvcmlhbC95ZWxs/b3ctYXR0ZW50aW9u/LXNpZ24td2l0aC1l/eGNsYW1hdGlvbi1t/YXJrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PNF9fMU4x/Mmh6YVVWYXZoaWZy/U21MVjVsUk1iVE9j/VHVTRzByZWRrX0tn/PQ'
            }
            else if (idade > 0 && idade <= 10){
                imagem.src = 'https://images.pexels.com/photos/5870206/pexels-photo-5870206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else if (idade <= 21){
                imagem.src = 'https://images.pexels.com/photos/29490905/pexels-photo-29490905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else if (idade <= 50){
                imagem.src = 'https://images.pexels.com/photos/8872169/pexels-photo-8872169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else if (idade < 100){
                imagem.src = 'https://images.pexels.com/photos/11512296/pexels-photo-11512296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                res.innerHTML = `detectamos ${genero} com ${idade} anos`
            }
            else {
                window.alert('[ERRO] DIGITE O ANO DE NASCIMENTO CORRETAMENTE')
                imagem.src = 'https://imgs.search.brave.com/Mh5il7ENSs-uVDy0AyYsK6q_iCAhWePl_zYHEys0u5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU4/MjA4Njg0NC9wdC92/ZXRvcmlhbC95ZWxs/b3ctYXR0ZW50aW9u/LXNpZ24td2l0aC1l/eGNsYW1hdGlvbi1t/YXJrLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1PNF9fMU4x/Mmh6YVVWYXZoaWZy/U21MVjVsUk1iVE9j/VHVTRzByZWRrX0tn/PQ'
            }
        }
        
    
        
        res.children(img)
    }