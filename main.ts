controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.y -= 16
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.x -= 16
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.x += 16
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snail.y += 16
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    if(heldBerry != null) {
        tiles.placeOnTile(heldBerry, location)
        heldBerry.setImage(img``)
        heldBerry = null

        if (berriesLeft == 0) {
            game.over(true)

        }
    }
})

function spawnBerries (numBerries: number, startCalumn: number, startRow: number, gap: number) {
    for (let index = 0; index < numBerries; index++) {
        berry = sprites.create(img`
            . . . . . . . 6 . . . . . . . .
            . . . . . . 8 6 6 . . . 6 8 . .
            . . . e e e 8 8 6 6 . 6 7 8 . .
            . . e 2 2 2 2 e 8 6 6 7 6 . . .
            . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
            . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
            e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
            e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
            e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
            e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
            e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
            e 2 2 2 2 2 2 2 4 e 2 e e c . .
            e e 2 e 2 2 4 2 2 e e e c . . .
            e e e e 2 e 2 2 e e e c . . . .
            e e e 2 e e c e c c c . . . . .
            . c c c c c c c . . . . . . . .
        `, SpriteKind.Food)
        berry.z = -1
        tiles.placeOnTile(berry, tiles.getTileLocation(startCalumn, startRow))
        startCalumn += 1 + gap
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (playersprite, berrySprite) {
    if (heldBerry == null) {
        heldBerry = berrySprite
        berrySprite.setImage(img`
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
        `)
    }
    berriesLeft -=1
})
let startCalumn = 0
let berry: Sprite = null
let rightcar = null
let Leftcar = null
let heldBerry:Sprite = null
let snail: Sprite = null
tiles.setTilemap(tilemap`level1`)
snail = sprites.create(img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `, SpriteKind.Player)
tiles.placeOnTile(snail, tiles.getTileLocation(5, 15))
scene.cameraFollowSprite(snail)
snail.setStayInScreen(true)
game.onUpdateInterval(500, function () {
    Leftcar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Leftcar, sprites.vehicle.roadHorizontal)
    Leftcar.vx = -50
    Leftcar.setFlag(SpriteFlag.DestroyOnWall, true)
    Leftcar.x = 180
})
game.onUpdateInterval(500, function () {
    rightcar = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(rightcar, assets.tile`myTile`)
    rightcar.vx = 50
    rightcar.setFlag(SpriteFlag.DestroyOnWall, true)
    rightcar.x = -20
})
let berriesLeft = 4

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, othersprite) {
    info.changeLifeBy(-1)
    othersprite.destroy()
})

spawnBerries(berriesLeft,  2,  1,  1,)
info.setLife(2)