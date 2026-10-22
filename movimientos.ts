/**
 * MEMORIA EN MOVIMIENTO
 */
/**
 * Punto = agitar
 */
/**
 * Cuadrado vacío = inclinar izquierda
 */
/**
 * Cuadrado lleno = inclinar derecha
 */
// Muestra toda la secuencia para memorizarla
function mostrarSecuencia () {
    basic.clearScreen()
    basic.pause(500)
    for (let i = 0; i <= secuencia.length - 1; i++) {
        mostrarSimbolo(secuencia[i])
        basic.pause(700)
        basic.clearScreen()
        basic.pause(300)
    }
    basic.showString("YA")
}
// Añade un símbolo aleatorio a la secuencia
function agregarSimbolo () {
    secuencia.push(randint(0, 2))
}
// Inicia una ronda nueva
function iniciarRonda () {
    posicion = 0
    mostrarSecuencia()
    basic.pause(300)
    jugando = true
}
// Detecta inclinación a la derecha
input.onGesture(Gesture.TiltRight, function () {
    comprobarMovimiento(2)
})
// Detecta agitación
input.onGesture(Gesture.Shake, function () {
    comprobarMovimiento(0)
})
// Detecta inclinación a la izquierda
input.onGesture(Gesture.TiltLeft, function () {
    comprobarMovimiento(1)
})
// A+B inicia o reinicia el juego
input.onButtonPressed(Button.AB, function () {
    if (!(jugando)) {
        secuencia = []
        nivel = 3
        for (let index = 0; index < nivel; index++) {
            agregarSimbolo()
        }
        iniciarRonda()
    }
})
// Comprueba si el movimiento corresponde al símbolo esperado
function comprobarMovimiento (movimiento: number) {
    if (!(jugando)) {
        return
    }
    if (movimiento == secuencia[posicion]) {
        posicion += 1
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
        if (posicion >= secuencia.length) {
            jugando = false
            basic.showIcon(IconNames.Happy)
            basic.showString("BIEN")
            basic.pause(500)
            // Añade un nuevo símbolo para el siguiente nivel
            agregarSimbolo()
            nivel = secuencia.length
            basic.showNumber(nivel)
            basic.pause(500)
            iniciarRonda()
        }
    } else {
        jugando = false
        basic.showIcon(IconNames.No)
        basic.showString("PUNTOS")
        basic.showNumber(secuencia.length - 1)
        basic.showString("A+B")
    }
}
// Muestra los símbolos en la pantalla LED
function mostrarSimbolo (simbolo: number) {
    if (simbolo == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (simbolo == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
}
let jugando = false
let posicion = 0
let secuencia: number[] = []
let nivel = 0
nivel = 3
basic.showString("A+B")
