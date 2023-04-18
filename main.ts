pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    }
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    4
    ), pins.map(
    pins.analogReadPin(AnalogPin.P2),
    0,
    1023,
    0,
    4
    ))
})
