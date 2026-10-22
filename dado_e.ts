// Recibe el dado del visitante
radio.onReceivedValue(function (nombre, valor) {
    if (nombre == "visitante" && rondaActiva && !(recibioDado)) {
        dadoVisitante = valor
        recibioDado = true
        comprobarResultado()
    }
})
// El expositor lanza su dado con A
input.onButtonPressed(Button.A, function () {
    if (rondaActiva && !(yaLance)) {
        yaLance = true
        miDado = randint(1, 6)
        basic.showNumber(miDado)
        comprobarResultado()
    }
})
// El expositor inicia una nueva ronda
input.onButtonPressed(Button.B, function () {
    rondaActiva = true
    yaLance = false
    recibioDado = false
    resultadoEnviado = false
    miDado = 0
    dadoVisitante = 0
    radio.sendString("NUEVA")
    basic.showString("LISTO")
})
// Compara los dados cuando ambos están disponibles
function comprobarResultado () {
    if (rondaActiva && yaLance && recibioDado && !(resultadoEnviado)) {
        resultadoEnviado = true
        if (dadoVisitante > miDado) {
            radio.sendString("GANASTE")
            basic.showString("VIS GANA")
        } else if (dadoVisitante < miDado) {
            radio.sendString("PERDISTE")
            basic.showString("CASA GANA")
        } else {
            radio.sendString("EMPATE")
            basic.showString("EMPATE")
        }
        rondaActiva = false
    }
}
let resultadoEnviado = false
let miDado = 0
let yaLance = false
let dadoVisitante = 0
let recibioDado = false
let rondaActiva = false
radio.setGroup(23)
basic.showString("PULSA B")
