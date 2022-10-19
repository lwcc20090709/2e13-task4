let value_x = 0
let value_Y = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(value_x, 0)
        basic.pause(200)
        value_x += 1
    }
    if (value_x > 4) {
        value_x = 0
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, value_Y)
        basic.pause(200)
        value_Y += 1
    }
    if (value_Y > 4) {
        value_Y = 0
    }
})
