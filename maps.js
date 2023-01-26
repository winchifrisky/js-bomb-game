/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
    "-": " ",
    "O": "🚪",
    "X": "💣",
    "I": "🎁",
    "PLAYER": "💀",
    "BOMB_COLLISION": "🔥",
    "GAME_OVER": "👎",
    "WIN": "🏆",
    "HEART": "❤️",
    
};

const maps = [];
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
`);
maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
`);
maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
`);
maps.push(`
    O-----XXXX
    XXXX---XXX
    XXXXXX-XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX--XXXXX
    XXX---XXXX
    XX--XXXXXX
    XI-XXXXXXX  
`);
// NEW MAPS
maps.push(`
    XX------XX
    XX-XXX--XX
    XX--XX---X
    XXXIXXXX-X
    XXXXXXXX-X
    XXXXXXXX-X
    X-----XX-X
    X-XXX-XX-X
    X-XXX----X
    XOXXXXXXXX  
`);
maps.push(`
    XXXXXI-XXX
    XXXXXX---X
    XXXXXXXX-X
    X--OXXXX-X
    X-XXXXXX-X
    X-XXXXXX-X
    X-XXXXXX-X
    X----XXX-X
    XXXX-XXX-X
    XXXX-----X  
`);
maps.push(`
    -----OXXXX
    --XXXXXXXX
    X-XXXXXXXX
    X-XXXXXXXX
    --XXXXXXXX
    --XXXXXXXX
    X-XXXXXXXX
    X-----XXXX
    XXXX--XXXX
    XXI--XXXXX  
`);
maps.push(`
    XXX-----XX
    XI--XXX-XX
    XXXX---XX
    XX----XXXX
    XX-XXXXXXX
    XX---XXXXX
    XXXX--XXXX
    XXXXX-----
    XXXXXXXXX-
    XXO-------  
`);
maps.push(`
    XXXXXXXXXX
    XOXXXXXXXX
    X--XXXXXXX
    XX-XXXXXXX
    XX-XXXXXXX
    XX-XXXXXXX
    X--XXXXXXX
    X-XXXXXXXX
    X------XXX
    XXXXXXIXXX  
`);
maps.push(`
    XXIXXXXXXX
    XX---XXXXX
    XXXX------
    XXXXX--XX-
    XXXXXXXXX-
    X------XX-
    X-XXXX-XX-
    X--XXX----
    XX-XXXXXXX
    XX----OXXX  
`);
maps.push(`
    XXO-------
    XXXXXXXXX-
    XXXXXXXXX-
    X-----XXX-
    X-XXX-XXX-
    X-XXX-XXX-
    X-XXX--XX-
    X-XI---XX-
    X-XXXXXXX-
    X---------  
`);
maps.push(`
    X---XXXXXX
    X-X-XXXIXX
    X-X-XXX-XX
    X-X-XXX-XX
    X-X-XXX-XX
    X-X-XXX-XX
    X-X-XXX-XX
    X-XOXXX-XX
    X-XXXXX-XX
    X-------XX  
`);
maps.push(`
    XXXX---XXX
    XX---X-OXX
    XX-XXXXXXX
    XX-XXXI--X
    XX-XXXXX-X
    XX---XXX-X
    XXXX-XXX-X
    XXX--XX--X
    X---XXX-XX
    XX------XX  
`);
maps.push(`
    XXXXXXXXXX
    XX-----XXX
    XX-XXX-XXX
    XX-XXXOXXX
    XX-XXXXXXX
    XX-------X
    XXXXXXXX-X
    XXXXXX---X
    XXXXXX-XXX
    XXI----XXX  
`);
/*
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
maps.push(`
    XXXIXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX
    XXXXXXXXXX  
`);
*/