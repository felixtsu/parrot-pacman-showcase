namespace SpriteKind {
    export const Pacman = SpriteKind.create()
    export const MagicBean = SpriteKind.create()
    export const EnemyInCenter = SpriteKind.create()
    export const WeakEnemy = SpriteKind.create()
    export const DeadEnemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Pacman, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
function teleportToLeft (sprite: Sprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 9))
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pacmanDirection = 0
})
scene.onHitWall(SpriteKind.EnemyInCenter, function (sprite, location) {
    randomTurn(sprite, enemyNormalSpeed)
})
function 放置大豆 () {
    for (let 值 of tiles.getTilesByType(myTiles.tile6)) {
        大豆 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . . . 3 3 3 3 3 3 3 3 . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . . 3 3 3 3 . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.MagicBean)
        tiles.placeOnTile(大豆, 值)
    }
}
function alignAndTurn (direction: number) {
    smoothturn.alignToTileCenter(pacmanSprite)
    turn(pacmanSprite, direction, pacmanSpeed)
    pacmanDirection = -1
}
function teleportToRight (sprite: Sprite) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(19, 9))
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pacmanDirection = 3
})
scene.onHitWall(SpriteKind.WeakEnemy, function (sprite, location) {
    randomTurn(sprite, weakEnemySpeed)
})
scene.onOverlapTile(SpriteKind.DeadEnemy, myTiles.tile8, function (sprite, location) {
    teleportToRight(sprite)
})
function setEnemySpriteImage (sprite: Sprite) {
    if (sprites.readDataString(sprite, "colour") == "red") {
        sprite.setImage(img`
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 1 1 2 2 2 1 1 2 2 2 . 
            . 2 2 2 1 1 1 1 2 1 1 1 1 2 2 . 
            2 2 2 2 1 1 8 8 2 1 1 8 8 2 2 2 
            2 2 2 2 1 1 8 8 2 1 1 8 8 2 2 2 
            2 2 2 2 2 1 1 2 2 2 1 1 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 . 2 2 2 2 . 2 2 2 2 . 
            . . 2 2 . . . 2 2 . . . 2 2 . . 
            `)
    } else if (sprites.readDataString(sprite, "colour") == "blue") {
        sprite.setImage(img`
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . 9 9 9 9 9 9 9 9 9 9 . . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . 9 9 9 9 1 1 9 9 9 1 1 9 9 9 . 
            . 9 9 9 1 1 1 1 9 1 1 1 1 9 9 . 
            9 9 9 9 1 1 8 8 9 1 1 8 8 9 9 9 
            9 9 9 9 1 1 8 8 9 1 1 8 8 9 9 9 
            9 9 9 9 9 1 1 9 9 9 1 1 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
            . 9 9 9 9 . 9 9 9 9 . 9 9 9 9 . 
            . . 9 9 . . . 9 9 . . . 9 9 . . 
            `)
    } else if (sprites.readDataString(sprite, "colour") == "yellow") {
        sprite.setImage(img`
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 1 1 5 5 5 1 1 5 5 5 . 
            . 5 5 5 1 1 1 1 5 1 1 1 1 5 5 . 
            5 5 5 5 1 1 8 8 5 1 1 8 8 5 5 5 
            5 5 5 5 1 1 8 8 5 1 1 8 8 5 5 5 
            5 5 5 5 5 1 1 5 5 5 1 1 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 . 5 5 5 5 . 5 5 5 5 . 
            . . 5 5 . . . 5 5 . . . 5 5 . . 
            `)
    } else {
        sprite.setImage(img`
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . 3 3 3 3 3 3 3 3 3 3 . . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . 3 3 3 3 1 1 3 3 3 1 1 3 3 3 . 
            . 3 3 3 1 1 1 1 3 1 1 1 1 3 3 . 
            3 3 3 3 1 1 8 8 3 1 1 8 8 3 3 3 
            3 3 3 3 1 1 8 8 3 1 1 8 8 3 3 3 
            3 3 3 3 3 1 1 3 3 3 1 1 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
            . 3 3 3 3 . 3 3 3 3 . 3 3 3 3 . 
            . . 3 3 . . . 3 3 . . . 3 3 . . 
            `)
    }
}
function randomTurn (_enemySprite: Sprite, _enemySpeed: number) {
    possibleDirections = []
    if (!(smoothturn.isWall(_enemySprite, CollisionDirection.Top))) {
        possibleDirections.push(0)
    }
    if (!(smoothturn.isWall(_enemySprite, CollisionDirection.Right))) {
        possibleDirections.push(1)
    }
    if (!(smoothturn.isWall(_enemySprite, CollisionDirection.Bottom))) {
        possibleDirections.push(2)
    }
    if (!(smoothturn.isWall(_enemySprite, CollisionDirection.Left))) {
        possibleDirections.push(3)
    }
    turn(_enemySprite, possibleDirections[randint(0, possibleDirections.length - 1)], _enemySpeed)
}
info.onCountdownEnd(function () {
    _weakEnemies = sprites.allOfKind(SpriteKind.WeakEnemy)
    for (let 值3 of _weakEnemies) {
        值3.setKind(SpriteKind.Enemy)
        值3.setVelocity(值3.vx * (enemyNormalSpeed / weakEnemySpeed), 值3.vy * (enemyNormalSpeed / weakEnemySpeed))
        setEnemySpriteImage(值3)
    }
})
sprites.onOverlap(SpriteKind.Pacman, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (sprites.allOfKind(SpriteKind.Food).length == 0) {
        game.over(true)
    }
})
scene.onOverlapTile(SpriteKind.WeakEnemy, myTiles.tile9, function (sprite, location) {
    teleportToLeft(sprite)
})
function createEnemy (colour: string) {
    enemySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.EnemyInCenter)
    sprites.setDataString(enemySprite, "colour", colour)
    setEnemySpriteImage(enemySprite)
    tiles.placeOnRandomTile(enemySprite, myTiles.tile4)
    turn(enemySprite, 1, enemyNormalSpeed)
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    randomTurn(sprite, enemyNormalSpeed)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pacmanDirection = 1
})
function 放置豆豆 () {
    for (let 值2 of tiles.getTilesByType(myTiles.tile2)) {
        豆 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(豆, 值2)
    }
}
function turn (target: Sprite, direction: number, speed: number) {
    if (direction == 0) {
        target.setVelocity(0, 0 - speed)
    } else if (direction == 1) {
        target.setVelocity(speed, 0)
    } else if (direction == 2) {
        target.setVelocity(0, speed)
    } else {
        target.setVelocity(0 - speed, 0)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pacmanDirection = 2
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile8, function (sprite, location) {
    teleportToRight(sprite)
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile9, function (sprite, location) {
    teleportToLeft(sprite)
})
scene.onOverlapTile(SpriteKind.Pacman, myTiles.tile9, function (sprite, location) {
    teleportToLeft(sprite)
})
scene.onOverlapTile(SpriteKind.Pacman, myTiles.tile8, function (sprite, location) {
    teleportToRight(sprite)
})
scene.onHitWall(SpriteKind.DeadEnemy, function (sprite, location) {
    randomTurn(sprite, deadEnemySpeed)
})
sprites.onOverlap(SpriteKind.Pacman, SpriteKind.WeakEnemy, function (sprite, otherSprite) {
    info.changeScoreBy(50)
    otherSprite.setImage(img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f f f f f f f f f f f f . . 
        . f f f f 1 1 f f f 1 1 f f f . 
        . f f f 1 1 1 1 f 1 1 1 1 f f . 
        f f f f 1 1 8 8 f 1 1 8 8 f f f 
        f f f f 1 1 8 8 f 1 1 8 8 f f f 
        f f f f f 1 1 f f f 1 1 f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        . f f f f f f f f f f f f f f . 
        . f f f f . f f f f . f f f f . 
        . . f f . . . f f . . . f f . . 
        `)
    otherSprite.setKind(SpriteKind.DeadEnemy)
    otherSprite.setVelocity(otherSprite.vx * (deadEnemySpeed / weakEnemySpeed), otherSprite.vy * (deadEnemySpeed / weakEnemySpeed))
    pause(10000)
    tiles.placeOnRandomTile(otherSprite, myTiles.tile4)
    otherSprite.setKind(SpriteKind.EnemyInCenter)
    setEnemySpriteImage(otherSprite)
    turn(otherSprite, 1, enemyNormalSpeed)
})
sprites.onOverlap(SpriteKind.Pacman, SpriteKind.MagicBean, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(10)
    _normalEnemies = sprites.allOfKind(SpriteKind.Enemy)
    for (let 值3 of _normalEnemies) {
        值3.setKind(SpriteKind.WeakEnemy)
        值3.setVelocity(值3.vx * (weakEnemySpeed / enemyNormalSpeed), 值3.vy * (weakEnemySpeed / enemyNormalSpeed))
        值3.setImage(img`
            . . . . . 8 8 8 8 8 8 . . . . . 
            . . . 8 8 8 8 8 8 8 8 8 8 . . . 
            . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
            . 8 8 8 8 1 1 8 8 8 1 1 8 8 8 . 
            . 8 8 8 1 1 1 1 8 1 1 1 1 8 8 . 
            8 8 8 8 1 1 1 1 8 1 1 1 1 8 8 8 
            8 8 8 8 1 1 1 1 8 1 1 1 1 8 8 8 
            8 8 8 8 8 1 1 8 8 8 1 1 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 1 8 8 8 1 8 8 8 1 8 8 8 1 8 8 
            8 8 1 8 1 8 1 8 1 8 1 8 1 8 8 8 
            8 8 8 1 8 8 8 1 8 8 8 1 8 8 8 8 
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 . 8 8 8 8 . 8 8 8 8 . 
            . . 8 8 . . . 8 8 . . . 8 8 . . 
            `)
    }
    info.startCountdown(15)
})
scene.onOverlapTile(SpriteKind.DeadEnemy, myTiles.tile9, function (sprite, location) {
    teleportToLeft(sprite)
})
scene.onOverlapTile(SpriteKind.WeakEnemy, myTiles.tile8, function (sprite, location) {
    teleportToRight(sprite)
})
let _ejectedEnemySprite: Sprite = null
let enemiesInCenter: Sprite[] = []
let _normalEnemies: Sprite[] = []
let 豆: Sprite = null
let enemySprite: Sprite = null
let _weakEnemies: Sprite[] = []
let possibleDirections: number[] = []
let 大豆: Sprite = null
let pacmanSprite: Sprite = null
let deadEnemySpeed = 0
let weakEnemySpeed = 0
let enemyNormalSpeed = 0
let pacmanDirection = 0
let pacmanSpeed = 0
pacmanSpeed = 50
pacmanDirection = -1
let direction = -1
enemyNormalSpeed = 50
weakEnemySpeed = 30
deadEnemySpeed = 100
tiles.setTilemap(tilemap`level`)
pacmanSprite = sprites.create(img`
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    5 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    `, SpriteKind.Pacman)
tiles.placeOnTile(pacmanSprite, tiles.getTileLocation(10, 15))
pacmanDirection = 3
scene.cameraFollowSprite(pacmanSprite)
放置豆豆()
放置大豆()
createEnemy("red")
createEnemy("blue")
createEnemy("yellow")
createEnemy("pink")
game.onUpdateInterval(5000, function () {
    enemiesInCenter = sprites.allOfKind(SpriteKind.EnemyInCenter)
    if (enemiesInCenter.length > 0) {
        _ejectedEnemySprite = sprites.allOfKind(SpriteKind.EnemyInCenter)[0]
        tiles.placeOnTile(_ejectedEnemySprite, tiles.getTileLocation(10, 7))
        _ejectedEnemySprite.setKind(SpriteKind.Enemy)
        turn(_ejectedEnemySprite, 3, enemyNormalSpeed)
    }
})
forever(function () {
    if (pacmanDirection == 0) {
        if (smoothturn.isCloseEnoughToTileCenter(pacmanSprite) && !(smoothturn.isWall(pacmanSprite, CollisionDirection.Top))) {
            alignAndTurn(pacmanDirection)
            animation.runImageAnimation(
            pacmanSprite,
            [img`
                . . 5 . . . . . . . . . . 5 . . 
                . 5 5 5 . . . . . . . . 5 5 5 . 
                5 5 5 5 5 . . . . . . 5 5 5 5 5 
                5 5 5 5 5 . . . . . . 5 5 5 5 5 
                5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
                5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                `,img`
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                `],
            200,
            true
            )
        }
    }
    if (pacmanDirection == 1) {
        if (smoothturn.isCloseEnoughToTileCenter(pacmanSprite) && !(smoothturn.isWall(pacmanSprite, CollisionDirection.Right))) {
            alignAndTurn(pacmanDirection)
            animation.runImageAnimation(
            pacmanSprite,
            [img`
                . . . . . 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                5 5 5 5 5 5 5 5 5 5 5 . . . . . 
                5 5 5 5 5 5 5 5 5 . . . . . . . 
                5 5 5 5 5 5 5 5 5 . . . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 . . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
                . . . . . 5 5 5 5 5 5 5 5 . . . 
                `,img`
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                `],
            200,
            true
            )
        }
    }
    if (pacmanDirection == 2) {
        if (smoothturn.isCloseEnoughToTileCenter(pacmanSprite) && !(smoothturn.isWall(pacmanSprite, CollisionDirection.Bottom))) {
            alignAndTurn(pacmanDirection)
            animation.runImageAnimation(
            pacmanSprite,
            [img`
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 . . 5 5 5 5 5 5 5 
                5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
                5 5 5 5 5 . . . . . . 5 5 5 5 5 
                5 5 5 5 5 . . . . . . 5 5 5 5 5 
                . 5 5 5 . . . . . . . . 5 5 5 . 
                . . 5 . . . . . . . . . . 5 . . 
                `,img`
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                `],
            200,
            true
            )
        }
    }
    if (pacmanDirection == 3) {
        if (smoothturn.isCloseEnoughToTileCenter(pacmanSprite) && !(smoothturn.isWall(pacmanSprite, CollisionDirection.Left))) {
            alignAndTurn(pacmanDirection)
            animation.runImageAnimation(
            pacmanSprite,
            [img`
                . . 5 5 5 5 5 5 5 5 5 . . . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . . . 5 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . 5 5 5 5 5 5 5 5 5 5 5 
                . . . . . . . 5 5 5 5 5 5 5 5 5 
                . . . . . . . 5 5 5 5 5 5 5 5 5 
                . . . . . 5 5 5 5 5 5 5 5 5 5 5 
                . . . . 5 5 5 5 5 5 5 5 5 5 5 5 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
                . . 5 5 5 5 5 5 5 5 5 . . . . . 
                `,img`
                . . . . . 5 5 5 5 5 5 . . . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
                . . . 5 5 5 5 5 5 5 5 5 5 . . . 
                . . . . 5 5 5 5 5 5 5 5 . . . . 
                . . . . . 5 5 5 5 5 5 . . . . . 
                `],
            200,
            true
            )
        }
    }
})
