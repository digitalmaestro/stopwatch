let Start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    basic.showNumber(Start / 1000)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - Start
    basic.showNumber(elapsed / 1000)
})
