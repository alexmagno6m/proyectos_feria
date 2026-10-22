input.onButtonPressed(Button.A, function () {
    if (!(jugando)) {
        jugarEquilibrio()
    }
})
function jugarEquilibrio () {
    jugando = true
    inicio = input.runningTime()
    estableDesde = -1
    basic.showString("ok")
    basic.showString("5")
    // Tiempo máximo para completar el reto: 20 segundos
    while (!(ganado) && input.runningTime() - inicio < 20000) {
        roll = input.rotation(Rotation.Roll)
        pitch = input.rotation(Rotation.Pitch)
        // La micro:bit debe mantenerse dentro de ±5° en ambos ejes
        if (Math.abs(roll) <= 5 && Math.abs(pitch) <= 5) {
            if (estableDesde == -1) {
                estableDesde = input.runningTime()
                basic.showIcon(IconNames.SmallDiamond)
            }
            // Debe permanecer estable durante 7 segundos
            if (input.runningTime() - estableDesde >= 7000) {
                ganado = true
            }
        } else {
            // Si se inclina demasiado, el conteo vuelve a empezar
            estableDesde = -1
        }
        basic.pause(50)
    }
    jugando = false
    if (ganado) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.showString("INTENTA OTRA VEZ")
    }
    basic.showString("PULSA A")
}
let pitch = 0
let roll = 0
let ganado = false
let estableDesde = 0
let inicio = 0
let jugando = false
basic.showString("A")
