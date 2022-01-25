enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const rightEnemies = SpriteKind.create()
    export const enemiesEnemies = SpriteKind.create()
    export const leftEnemies = SpriteKind.create()
    export const life = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _1.vy = -150
    _1.setImage(assets.image`1-2`)
})
function rightEnemy () {
    for (let index = 0; index <= 3; index++) {
        if (left[index].y < 0) {
            left[index].setPosition(-5, randint(10, 82))
            left[index].setVelocity(randint(30, 60), 0)
            break;
        } else if (left[index].x > 170) {
            left[index].setPosition(-100, -100)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.setPosition(-100, -100)
    info.changeScoreBy(20)
    if (info.life() < 3) {
        info.changeLifeBy(1)
    }
})
function leftEnemy () {
    for (let index = 0; index <= 3; index++) {
        if (right[index].y < 0) {
            right[index].setPosition(165, randint(10, 82))
            right[index].setVelocity(randint(-30, -60), 0)
            break;
        } else if (right[index].x < -10) {
            right[index].setPosition(-100, -100)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(-100, -100)
    info.changeScoreBy(-10)
    if (info.life() > 0) {
        info.changeLifeBy(-1)
    }
})
let star: Sprite = null
let enemiesR: Sprite = null
let enemiesL: Sprite = null
let left: Sprite[] = []
let right: Sprite[] = []
let _1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
_1 = sprites.create(assets.image`1-1`, SpriteKind.Player)
_1.setPosition(80, 82)
info.setLife(3)
info.setScore(0)
right = sprites.allOfKind(SpriteKind.Enemy)
left = sprites.allOfKind(SpriteKind.Enemy)
let stars = sprites.allOfKind(SpriteKind.Food)
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
for (let index = 0; index <= 3; index++) {
    star = sprites.create(assets.image`3`, SpriteKind.Food)
    star.setPosition(-100, -100)
    stars.push(star)
}
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
        _1.setImage(assets.image`1-1`)
    } else if (_1.y < 82 && (_1.vy > -1 && _1.vy <= 50)) {
        _1.setImage(assets.image`1-3`)
        _1.vy += 5
    }
    if (_1.x < 5) {
        _1.x = 5
    } else if (_1.x > 155) {
        _1.x = 155
    } else if (_1.y < 0) {
        _1.y = 0
    }
    for (let index = 0; index <= 3; index++) {
        if (stars[index].y > 83) {
            stars[index].setPosition(-100, -100)
        }
    }
})
game.onUpdateInterval(randint(1000, 1500), function () {
    rightEnemy()
})
game.onUpdateInterval(randint(1000, 1500), function () {
    leftEnemy()
})
game.onUpdateInterval(randint(7000, 10000), function () {
    for (let index = 0; index <= 3; index++) {
        if (stars[index].x < 0) {
            stars[index].setPosition(randint(10, 150), -5)
            stars[index].setVelocity(0, randint(10, 20))
            break;
        }
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
