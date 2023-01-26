radio.onReceivedNumber(function (receivedNumber) {
    while (enviado == 0) {
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(1)
    basic.pause(100)
    enviado = 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(3)
    basic.pause(100)
    enviado = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    radio.sendNumber(2)
    basic.pause(100)
    enviado = 1
})
let enviado = 0
radio.setGroup(33)
radio.sendNumber(33)
basic.forever(function () {
	
})
