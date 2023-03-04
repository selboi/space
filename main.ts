input.onButtonPressed(Button.A, function () {
    Ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    Shoot = game.createSprite(Ship.get(LedSpriteProperty.X), Ship.get(LedSpriteProperty.Y))
    Shoot.change(LedSpriteProperty.Brightness, 80)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (Shoot.isTouching(Mean)) {
            game.addScore(1)
            Shoot.delete()
            Mean.delete()
        }
    }
    if (Shoot.get(LedSpriteProperty.Y) <= 0) {
        Shoot.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    Ship.move(1)
})
let Mean: game.LedSprite = null
let Shoot: game.LedSprite = null
let Ship: game.LedSprite = null
Ship = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    Mean = game.createSprite(randint(0, 10), -1)
    Mean.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    Mean.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        Mean.move(1)
        basic.pause(1000)
        if (Mean.isTouching(Ship)) {
            game.gameOver()
        }
    }
    if (Mean.isTouchingEdge()) {
        Mean.delete()
    }
})
