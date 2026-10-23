radio.onReceivedNumber(function (receivedNumber) {
    dado_receptor = randint(1, 6)
    basic.showIcon(IconNames.Diamond)
    basic.pause(50)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(50)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(dado_receptor)
    radio.sendNumber(dado_receptor)
    if (dado_receptor > receivedNumber) {
        basic.showIcon(IconNames.Happy)
    } else if (dado_receptor < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let dado_receptor = 0
radio.setGroup(1)
