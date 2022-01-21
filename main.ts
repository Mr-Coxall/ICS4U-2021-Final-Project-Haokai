enum ActionKind {
    Walking,
    Idle,
    Jumping
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _1.vy = -100
})
let _1: Sprite = null
scene.setBackgroundImage(assets.image`background`)
_1 = sprites.create(assets.image`1-1`, SpriteKind.Player)
_1.setPosition(80, 82)
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
    } else if (_1.y < 82 && _1.vy > -1) {
        _1.vy = 50
    }
})
