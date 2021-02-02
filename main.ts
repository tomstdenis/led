input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(x, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    x += 1
    if (x == 16) {
        x = 0
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(x, neopixel.rgb(90, 2, 70))
    strip.show()
    x += 1
    if (x == 16) {
        x = 0
    }
})
let x = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
x = 0
strip.setBrightness(16)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
	
})
