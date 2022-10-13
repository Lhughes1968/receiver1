radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "OPEN") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
led.setBrightness(10)
radio.setGroup(1)
basic.forever(function () {
	
})
