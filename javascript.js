var img = document.getElementById("img")
var autor = document.getElementById("autor")

var horario = new Date()
var horas = horario.getHours()
var minutos = horario.getMinutes()

var time = document.getElementById("time")

var html = window.document.getElementById("html")

var tarde = false
var noite = false
var madrugada = false
var manha = false

function verificarHora() {

    if(horas >= 12 && horas < 18) {

        time.innerHTML = "e agora está de tarde, Horário Atual: " + horas + ":" + String(horario.getMinutes()).padStart(2, "0");
        html.style.backgroundImage = "linear-gradient(120deg, rgb(255, 101, 74), rgb(255, 217, 4)"
        tarde = true
        noite = false
        madrugada = false
        manha = false
        contador = -1

    } else if(horas >= 18 && horas < 24) {

        time.innerHTML = "e agora está de noite, Horário Atual: " + horas + ":" + String(horario.getMinutes()).padStart(2, "0");
        html.style.backgroundImage = "linear-gradient(45deg, #000000, #030F33)"
        html.style.color = "white"
        contador = 4

        tarde = false
        noite = true
        madrugada = false
        manha = false


    } else if(horas >= 0 && horas < 6) {
        
        time.innerHTML = "e agora está de madrugada, Horário Atual: " + horas + ":" + String(horario.getMinutes()).padStart(2, "0");
        html.style.backgroundImage = "linear-gradient(45deg, black, #1C1C1C)"
        html.style.color = "white"

        tarde = false
        noite = false
        madrugada = true
        manha = false

    } else {

        time.innerHTML = "e agora está de manha, Horário Atual: " + horas + ":" + String(horario.getMinutes()).padStart(2, "0");
        html.style.backgroundImage = "linear-gradient(70deg, #020024, #008aa6 100%)"
        html.style.color = "white"
        contador = 14

        tarde = false
        noite = false
        madrugada = false
        manha = true

    }
}

verificarHora()
setInterval(verificarHora, 60000)



//tarde
var musica0 = new Audio("audios/ate amanha.mp3")
var musica1 = new Audio("audios/dead feelings.mp3")
var musica2 = new Audio("audios/passeio noturno.mp3")
var musica3 = new Audio("audios/this pretty girl.mp3")
var musica4 = new Audio("audios/SPACE POTATOES.mp3")

//noite
var musica5 = new Audio("audios/imperfect.mp3") 
var musica6 =  new Audio("audios/twin peaks.mp3")
var musica7 =  new Audio("audios/The Borrowers.mp3")
var musica8 =  new Audio("audios/After the Storm.mp3")
var musica9 =  new Audio("audios/Sail Away.mp3")

//manha
var musica15 =  new Audio("audios/Coffee Shop.mp3")
var musica16 =  new Audio("audios/saturday jam.mp3")
var musica17 =  new Audio("audios/Memoria.mp3")
var musica18 =  new Audio("audios/Slept Alone.mp3")
var musica19 =  new Audio("audios/Writing All Day.mp3")

var tocar = document.getElementById("tocar")
var voltar = document.getElementById("voltar")
var pular = document.getElementById("pular")

var pausar = true

voltar.addEventListener("click", () => {

    if(contador == 1 && tarde == true) {
        autor.innerHTML = "Gabriel Mzero - Até Amanhã"
        musica1.pause()
        musica1.ariaCurrent = 0
        img.src = "images/patins.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 2 && tarde == true) {
        autor.innerHTML = "MOSHi - Dead Feelings"
        musica2.pause()
        musica2.ariaCurrent = 0
        img.src = "images/bike.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 3 && tarde == true) {
        autor.innerHTML = "Gabriel Mzero - Passeio Noturno"
        musica3.pause()
        musica3.ariaCurrent = 0
        img.src = "images/casas.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 4 && tarde == true) {
        autor.innerHTML = "Barradeen - This Pretty Girl"
        musica4.pause()
        musica4.ariaCurrent = 0
        img.src = "images/tarde.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 5 && noite == true) {
        autor.innerHTML = "Toolo - imperfect"
        musica5.pause()
        musica5.ariaCurrent = 0
        img.src = "images/luar.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 6 && noite == true) {
        autor.innerHTML = "Toolo - imperfect"
        musica6.pause()
        musica6.ariaCurrent = 0
        img.src = "images/luar.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 7 && noite == true) {
        autor.innerHTML = "Druid - Twin Peaks"
        musica7.pause()
        musica7.ariaCurrent = 0
        img.src = "images/sacada.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 8 && noite == true) {
        autor.innerHTML = "Jon Kyoto & Seerlight - The Borrowers"
        musica8.pause()
        musica8.ariaCurrent = 0
        img.src = "images/trem.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 9 && noite == true) {
        autor.innerHTML = "Oui Lele - After the Storm"
        musica9.pause()
        musica9.ariaCurrent = 0
        img.src = "images/caminhada.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 10 && noite == true) {
        autor.innerHTML = "Mell-ø - Sail Away"
        musica9.pause()
        musica9.ariaCurrent = 0
        img.src = "images/smoking.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 16 && manha == true) {
        autor.innerHTML = "BØJET - Coffee Shop"
        musica16.pause()
        musica16.ariaCurrent = 0
        img.src = "images/manha.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 17 && manha == true) {
        autor.innerHTML = "RadicalRingtail - Saturday Jam"
        musica17.pause()
        musica17.ariaCurrent = 0
        img.src = "images/janela.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 18 && manha == true) {
        autor.innerHTML = "Mondo Loops x Mau - Memoria"
        musica18.pause()
        musica18.ariaCurrent = 0
        img.src = "images/arvore.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    else if(contador == 19 && manha == true) {
        autor.innerHTML = "Towerz x edelwize - Slept Alone"
        musica19.pause()
        musica19.ariaCurrent = 0
        img.src = "images/trem 2.gif"
        contador--
        tocar.innerHTML = "⏵"
    }
    

})


pular.addEventListener("click", () => {

    if(contador == -1 && tarde == true) {
    autor.innerHTML = "Gabriel Mzero - Até Amanhã"
    musica1.pause()
    musica1.ariaCurrent = 0
    img.src = "images/patins.gif"
    contador++
    tocar.innerHTML = "⏵"

    }
    else if(contador == 0 && tarde == true) {
        autor.innerHTML = "MOSHi - Dead Feelings"
        musica0.pause()
        musica0.ariaCurrent = 0
        img.src = "images/bike.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 1 && tarde == true) {
        autor.innerHTML = "Gabriel Mzero - Passeio Noturno"
        musica1.pause()
        musica1.ariaCurrent = 0
        img.src = "images/casas.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 2 && tarde == true) {
        autor.innerHTML = "Barradeen - This Pretty Girl"
        musica2.pause()
        musica2.ariaCurrent = 0
        img.src = "images/tarde.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 3 && tarde == true) {
        autor.innerHTML = "Moo - Space Potatoes"
        musica3.pause()
        musica3.ariaCurrent = 0
        img.src = "images/disco.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 4 && noite == true) {
        autor.innerHTML = "Toolo - imperfect"
        musica4.pause()
        musica4.ariaCurrent = 0
        img.src = "images/luar.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 5 && noite == true) {
        autor.innerHTML = "Druid - Twin Peaks"
        musica5.pause()
        musica5.ariaCurrent = 0
        img.src = "images/sacada.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 6 && noite == true) {
        autor.innerHTML = "Jon Kyoto & Seerlight - The Borrowers"
        musica6.pause()
        musica6.ariaCurrent = 0
        img.src = "images/trem.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 7 && noite == true) {
        autor.innerHTML = "Oui Lele - After the Storm"
        musica7.pause()
        musica7.ariaCurrent = 0
        img.src = "images/caminhada.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 8 && noite == true) {
        autor.innerHTML = "Mell-ø - Sail Away"
        musica8.pause()
        musica8.ariaCurrent = 0
        img.src = "images/smoking.gif"
        contador++
        tocar.innerHTML = "⏵"
    }
    else if(contador == 14 && manha == true) {
        autor.innerHTML = "BØJET - Coffee Shop"
        img.src = "images/manha.gif"
        contador++
        tocar.innerHTML = "⏵"
        musica14.pause()
        musica14.ariaCurrent = 0
    }
    else if(contador == 15 && manha == true) {
        autor.innerHTML = "RadicalRingtail - Saturday Jam"
        img.src = "images/janela.gif"
        contador++
        tocar.innerHTML = "⏵"
        musica15.pause()
        musica15.ariaCurrent = 0
    }
    else if(contador == 16 && manha == true) {
        autor.innerHTML = "Mondo Loops x Mau - Memoria"
        img.src = "images/arvore.gif"
        contador++
        tocar.innerHTML = "⏵"
        musica16.pause()
        musica16.ariaCurrent = 0
    }
    else if(contador == 17 && manha == true) {
        autor.innerHTML = "Towerz x edelwize - Slept Alone"
        img.src = "images/trem 2.gif"
        contador++
        tocar.innerHTML = "⏵"
        musica17.pause()
        musica17.ariaCurrent = 0
    }
    else if(contador == 18 && manha == true) {
        autor.innerHTML = "HM Surf - Writing All Day"
        img.src = "images/nascer do sol.gif"
        contador++
        tocar.innerHTML = "⏵"
        musica18.pause()
        musica18.ariaCurrent = 0
    }
    

})

tocar.addEventListener("click", () => {

    if(pausar == true && contador == 0 && tarde == true) {

        musica0.play()
        tocar.innerHTML = "‖"
        pausar = false

    } else if(pausar == true && contador == 1 && tarde == true){

        musica1.play()
        tocar.innerHTML = "‖"
        pausar = false

    } else if(pausar == true && contador == 2 && tarde == true){

        musica2.play()
        tocar.innerHTML = "‖"
        pausar = false

    }else if (pausar == true && contador == 3 && tarde == true){

        musica3.play()
        tocar.innerHTML = "‖"
        pausar = false

    }else if (pausar == true && contador == 4 && tarde == true){

        musica4.play()
        tocar.innerHTML = "‖"
        pausar = false

    }else if(pausar == true && contador == 5 && noite == true) {

        autor.innerHTML = "Toolo - imperfect"
        img.src = "images/luar.gif"
        musica5.play()
        tocar.innerHTML = "‖"
        pausar = false

    } else if(pausar == true && contador == 6 && noite == true) {

        autor.innerHTML = "Druid - Twin Peaks"
        img.src = "images/sacada.gif"
        musica6.play()
        tocar.innerHTML = "‖"
        pausar = false
    }else if(pausar == true && contador == 7 && noite == true) {

        autor.innerHTML = "Jon Kyoto & Seerlight - The Borrowers"
        img.src = "images/trem.gif"
        musica7.play()
        tocar.innerHTML = "‖"
        pausar = false
    }else if(pausar == true && contador == 8 && noite == true) {

        autor.innerHTML = "Oui Lele - After the Storm"
        img.src = "images/caminhada.gif"
        musica8.play()
        tocar.innerHTML = "‖"
        pausar = false
    }else if(pausar == true && contador == 9 && noite == true) {

        autor.innerHTML = "Mell-ø - Sail Away"
        img.src = "images/smoking.gif"
        musica9.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    else if(pausar == true && contador == 15 && manha == true) {

        autor.innerHTML = "BØJET - Coffee Shop"
        img.src = "images/smoking.gif"
        musica15.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    else if(pausar == true && contador == 16 && manha == true) {

        autor.innerHTML = "RadicalRingtail - Saturday Jam"
        img.src = "images/smoking.gif"
        musica16.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    else if(pausar == true && contador == 17 && manha == true) {

        autor.innerHTML = "Mondo Loops x Mau - Memoria"
        img.src = "images/smoking.gif"
        musica17.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    else if(pausar == true && contador == 18 && manha == true) {

        autor.innerHTML = "Towerz x edelwize - Slept Alone"
        img.src = "images/smoking.gif"
        musica18.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    else if(pausar == true && contador == 19 && manha == true) {

        autor.innerHTML = "HM Surf - Writing All Day"
        img.src = "images/smoking.gif"
        musica19.play()
        tocar.innerHTML = "‖"
        pausar = false
    }
    
    else
    {

    musica1.pause()
    musica2.pause()
    


    musica5.pause()
    musica6.pause()
    musica7.pause()
    musica8.pause()
    musica9.pause()

    musica15.pause()
    musica16.pause()
    musica17.pause()
    musica18.pause()
    musica19.pause()

    tocar.innerHTML = "⏵"
    pausar = true  

    } 

})


var chuva = document.getElementById("chuva")
var audio = new Audio('audios/chuvinha.mp3');
audio.volume = 0.2
var ligarChuva = true


chuva.addEventListener("click", () => {
    
    if(ligarChuva == true) {
        
        chuva.style.backgroundColor = "#8A9A5B"
        audio.play();
        audio.loop  = true
        ligarChuva = false
        
    } else {
        chuva.style.backgroundColor = "rgb(253, 140, 99)"
        audio.pause()
        ligarChuva = true
    }
    
})


var trovao = document.getElementById("trovao")
var trovaoAudio = new Audio('audios/trovao.mp3')
trovaoAudio.volume = 0.2
var ligarTrovao = true

trovao.addEventListener("click", () => {
    
    if(ligarTrovao == true) {
        
        trovao.style.backgroundColor = "#8A9A5B"
        trovaoAudio.play();
        trovaoAudio.loop = true
        ligarTrovao = false
        
    } else {
        trovao.style.backgroundColor = "rgb(253, 140, 99)"
        trovaoAudio.pause()
        ligarTrovao = true
    }
    
})

var estatica = document.getElementById("estatica")
var estaticaAudio  = new Audio("audios/Estatica.mp3")
estaticaAudio.volume = 0.07
var ligarEstatica = true

estatica.addEventListener("click", () => {
    if(ligarEstatica == true) {
        estatica.style.backgroundColor = "#8A9A5B"
        estaticaAudio.play()
        estatica.loop = true
        ligarEstatica = false
    } else {
        estatica.style.backgroundColor = "rgb(253, 140, 99)"
        estaticaAudio.pause()
        ligarEstatica = true
    }
})