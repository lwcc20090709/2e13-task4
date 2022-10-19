let value_x = 0
let value_Y = 0
input.onButtonPressed(Button.A, function () {
    value_x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(value_x, 0)
        basic.pause(200)
        basic.clearScreen()
        value_x += 1
    }
})
input.onButtonPressed(Button.B, function () {
    value_Y = 0
    while (value_Y >= 0) {
        led.plot(0, value_Y)
        basic.pause(200)
        basic.clearScreen()
        value_Y += 1
    }
})
