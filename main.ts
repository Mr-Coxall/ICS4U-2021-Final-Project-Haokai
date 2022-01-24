enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const rightEnemies = SpriteKind.create()
    export const enemiesEnemies = SpriteKind.create()
    export const leftEnemies = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _1.vy = -150
})
function leftEnemy () {
    for (let index = 0; index <= 3; index++) {
        if (right[index].y < 0) {
            right[index].setPosition(165, randint(5, 82))
            right[index].setVelocity(randint(-40, -60), 0)
            break;
        } else if (right[index].x < -10) {
            right[index].setPosition(-100, -100)
        }
    }
}
let enemiesR: Sprite = null
let enemiesL: Sprite = null
let right: Sprite[] = []
let _1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
_1 = sprites.create(assets.image`1-1`, SpriteKind.Player)
_1.setPosition(80, 82)
right = []
let left: Sprite[] = []
for (let index = 0; index <= 3; index++) {
    enemiesL = sprites.create(assets.image`4`, SpriteKind.Enemy)
    enemiesL.setPosition(-100, -100)
    left.push(enemiesL)
}
for (let index = 0; index <= 3; index++) {
    enemiesR = sprites.create(assets.image`5`, SpriteKind.Enemy)
    enemiesR.setPosition(-100, -100)
    right.push(enemiesR)
}
leftEnemy()
game.onUpdate(function () {
    if (controller.player1.isPressed(ControllerButton.Right)) {
        _1.vx = 50
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        _1.vx = -50
    } else {
        _1.vx = 0
    }
    if (_1.vy < 0) {
        _1.vy += 10
    } else if (_1.y > 82) {
        _1.y = 82
    } else if (_1.y < 82 && (_1.vy > -1 && _1.vy <= 50)) {
        _1.vy += 5
    } else if (_1.y < 82 && _1.vy <= 50) {
        _1.vy = 50
    } else {
        _1.vy = 0
    }
})
game.onUpdate(function () {
    let index = 0
    if (right[index].x < -10) {
        leftEnemy()
        leftEnemy()
    }
})
