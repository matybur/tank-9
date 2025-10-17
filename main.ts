input.onButtonPressed(Button.A, function () {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M4,
    70,
    SuperBit.enMotors.M2,
    70
    )
})
input.onButtonPressed(Button.AB, function () {
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 140)
})
basic.showIcon(IconNames.TShirt)
SuperBit.Music(SuperBit.enMusic.dadadum)
basic.forever(function () {
	
})
