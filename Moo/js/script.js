// VARIÁVEIS
let posX = 280
let posY = 210
let direcao = 1

// CONSTANTES
const telaJogo = document.getElementById('telaJogo')
const player = telaJogo.getContext('2d')
const img = new Image()
const moo = new Audio('../sounds/cow-moo.mp3')

img.src = '../img/mimosa.png'
moo.volume = 0.5

img.onload = function() {
    desenharPlayer()
}

function desenharPlayer() {
    player.clearRect(0, 0, telaJogo.width, telaJogo.height)

    player.save()
    player.translate(posX + 75, posY + 75)
    player.scale(direcao, 1);
    player.drawImage(img, -75, -75, 150, 90)

    player.restore() // Restaura o canvas (remove a rotação/escala para o próximo desenho)
}

window.addEventListener("keydown", function(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        posX += 5
        direcao = 1  // Normal
    } 
    else if (e.key === 'ArrowLeft' || e.key === 'a') {
        posX -= 5
        direcao = -1 // Inverte horizontalmente (olha para esquerda)
    } 
    else if (e.key === 'ArrowUp' || e.key === 'w') {
        posY -= 5
    } 
    else if (e.key === 'ArrowDown' || e.key === 's') {
        posY += 5
    }
    else if (e.key === 'Enter' || e.key === ' '){
        moo.play()
    }

    if (posX < 10) posX = 10

    if (posY < 10) posY = 10

    if (posX > telaJogo.width - 160){
        posX = telaJogo.width - 160
    }

    if (posY > telaJogo.height - 100){
        posY = telaJogo.height - 100
    }

    desenharPlayer()
})