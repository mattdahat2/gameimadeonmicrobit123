input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(5)
})
let sprite: game.LedSprite = null
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("GO")
sprite = game.createSprite(2, 2)
let goal = game.createSprite(0, 2)
basic.forever(function () {
    sprite.move(1)
    basic.pause(200)
    if (true) {
        if (sprite.isTouching(goal)) {
            basic.showString("YOU WIN!")
        }
    }
})
