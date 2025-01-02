radio.onReceivedString(function (receivedString) {
    Servo.ServoPulse(1, 1500)
    Servo.ServoPulse(2, 1500)
    if (receivedString == "N") {
        Servo.Servo(1, 0)
        Servo.Servo(2, 180)
        basic.showString("N")
    } else if (receivedString == "E") {
        Servo.Servo(1, 180)
        Servo.Servo(2, 180)
        basic.showString("E")
    } else if (receivedString == "S") {
        Servo.Servo(1, 180)
        Servo.Servo(2, 0)
        basic.showString("S")
    } else if (receivedString == "W") {
        Servo.Servo(1, 0)
        Servo.Servo(2, 0)
        basic.showString("W")
    } else if (receivedString == "X") {
        Servo.Servo(1, 90)
        Servo.Servo(2, 90)
        basic.showString("X")
    }
    basic.clearScreen()
})
radio.setGroup(100)
