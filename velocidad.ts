input.onButtonPressed(Button.A, function () {
    if (!(jugando)) {
        iniciarJuego()
    } else if (listo) {
        tiempoReaccion = input.runningTime() - tiempoInicio
        jugando = false
        listo = false
        basic.showNumber(tiempoReaccion)
        basic.pause(500)
        if (tiempoReaccion < 10) {
            basic.showIcon(IconNames.Happy)
        } else if (tiempoReaccion < 50) {
            basic.showIcon(IconNames.Confused)
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        jugando = false
        listo = false
        basic.showString("FALLO")
    }
})
function iniciarJuego () {
    jugando = true
    listo = false
    basic.showString("ok")
    basic.pause(randint(1000, 7000))
    basic.showIcon(IconNames.Target)
    tiempoInicio = input.runningTime()
    listo = true
}
let tiempoInicio = 0
let tiempoReaccion = 0
let listo = false
let jugando = false
basic.showString("A")