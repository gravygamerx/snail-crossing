// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`0b00110007070707070707070707070401040104010401040104010101010101010101010103030303030303030303030505050505050505050505040404040404040404040404040404040404040404040303030303030303030303050505050505050505050503030303030303030303030505050505050505050505040404040404040404040404040404040404040404040303030303030303030303050505050505050505050501010101010101010101010202020202020202020202`, img`
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile3,sprites.castle.saplingPine], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0b0010000202020202020202020202020202020202020202020203030303030303030303030101010101010101010101030303030303030303030301010101010101010101010303030303030303030303020202020202020202020202020202020202020202020303030303030303030303010101010101010101010103030303030303030303030101010101010101010101030303030303030303030302020202020202020202020404040404040404040404`, img`
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile7,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile6":return tile6;
            case "myTile1":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
