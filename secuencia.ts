let secuencia: number[] = []
let nivel = 0
let posicion = 0
let esperandoRespuesta = false
let partidaActiva = false
function mostrarSimbolo(simbolo: number) {
    if (simbolo == 0) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.East)
    }
    basic.pause(400)
    basic.clearScreen()
    basic.pause(200)
}
function mostrarSecuencia() {
    esperandoRespuesta = false
    for (let i = 0; i < secuencia.length; i++) {
        mostrarSimbolo(secuencia[i])
    }
    posicion = 0
    esperandoRespuesta = true
}
function iniciarPartida() {
    secuencia = []
    nivel = 0
    posicion = 0
    partidaActiva = true
    siguienteRonda()
}
function siguienteRonda() {
    nivel += 1
    secuencia.push(randint(0, 1))
    basic.showNumber(nivel)
    basic.pause(500)
    mostrarSecuencia()
}
function verificarRespuesta(respuesta: number) {
    if (!partidaActiva || !esperandoRespuesta) {
        return
    }
    if (respuesta == secuencia[posicion]) {
        posicion += 1
        if (posicion == secuencia.length) {
            esperandoRespuesta = false
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            if (nivel >= 8) {
                basic.showString("GANASTE")
                partidaActiva = false
            } else {
                siguienteRonda()
            }
        }
    } else {
        esperandoRespuesta = false
        partidaActiva = false
        basic.showIcon(IconNames.No)
        basic.pause(300)
        basic.showString("NIVEL")
        basic.showNumber(nivel)
        basic.showString("A+B")
    }
}
input.onButtonPressed(Button.A, function () {
    if (!partidaActiva) {
        return
    }
    verificarRespuesta(0)
})
input.onButtonPressed(Button.B, function () {
    if (!partidaActiva) {
        return
    }
    verificarRespuesta(1)
})
input.onButtonPressed(Button.AB, function () {
    if (!partidaActiva) {
        iniciarPartida()
    }
})
basic.showString("A+B")