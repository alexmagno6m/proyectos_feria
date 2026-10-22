radio.setGroup(23)

let miDado = 0
let rondaActiva = false
let yaLance = false

basic.showString("ESPERA")

// El expositor anuncia el inicio de una ronda
radio.onReceivedString(function (recibido) {
    if (recibido == "NUEVA") {
        rondaActiva = true
        yaLance = false
        miDado = 0
        basic.showString("LISTO")
    } else if (recibido == "GANASTE") {
        basic.showIcon(IconNames.Happy)
        basic.showString("GANASTE")
        rondaActiva = false
    } else if (recibido == "PERDISTE") {
        basic.showIcon(IconNames.Sad)
        basic.showString("PERDISTE")
        rondaActiva = false
    } else if (recibido == "EMPATE") {
        basic.showString("EMPATE")
        rondaActiva = false
    }
})

// El visitante lanza su dado
input.onButtonPressed(Button.A, function () {
    if (rondaActiva && !yaLance) {
        yaLance = true
        miDado = randint(1, 6)

        basic.showNumber(miDado)

        // Envía el resultado al expositor
        radio.sendValue("visitante", miDado)
    }
})