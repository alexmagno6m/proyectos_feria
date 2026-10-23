radio.onReceivedNumber(function (receivedNumber) {
    if (dado_e > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else if (dado_e < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    dado_e = randint(1, 6)
    basic.showIcon(IconNames.Square)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(dado_e)
    radio.sendNumber(dado_e)
})
let dado_e = 0
radio.setGroup(1)