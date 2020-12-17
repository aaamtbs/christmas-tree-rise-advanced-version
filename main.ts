input.onSound(DetectedSound.Loud, function () {
    tree.triggerRiseWithColor(duration, color)
})
input.onButtonPressed(Button.A, function () {
    color += -20
    if (color < 0) {
        color = 360
    }
})
input.onButtonPressed(Button.B, function () {
    color += 20
    if (color > 360) {
        color = 0
    }
})
let color = 0
let duration = 0
let tree: ChristmasTree.ChristmasTree = null
tree = ChristmasTree.create()
tree.changeMode(LEDMode.Free)
duration = 3
color = 0
basic.forever(function () {
    tree.moveRise()
    tree.update()
})
