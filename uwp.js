function uwpSanitizer(uwp){
    const sanitizedUwp = uwp.toUpperCase()
    return sanitizedUwp
}

function diceRoller(numDice){
    let d = 0
    for (let i = 0; i <= numDice; i++){
        d += Math.floor(Math.random() * (6-1+1)) + 1;
    }
    return d
}

function hexifier(char) {
    if (char >= '0' && char <= '9') {
        return parseInt(char, 10); 
    } else if (char >= 'A' && char <= 'F') {
        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    } else {
        throw new Error('Invalid hexadecimal character');
    }
}

function hydroParsing(uwp){
    const hydroHex = uwp[3]
    if (hydroHex === '1'){
        return '6-15%'
    } else if (hydroHex === '2'){
        return '16-25%'
    } else if (hydroHex === '3'){
        return '26-35%'
    } else if (hydroHex === '4'){
        return '36-45%'
    } else if (hydroHex === '5'){
        return '46-55%'
    } else if (hydroHex === '6'){
        return '56-65%'
    } else if (hydroHex === '7'){
        return '66-75%'
    } else if (hydroHex === '8'){
        return '76-85%'
    } else if (hydroHex === '9'){
        return '86-95%'
    } else if (hydroHex === 'A'){
        return '95-100%'
    } else {
        return '0-5%'
    }
}

function atmosphereParsing(uwp){
    const atmosphereHex = uwp[2]
    if (atmosphereHex === '1'){
        return 'Atmosphere: Trace Pressure: .05 Protection: Vacc Suit'
    } else if (atmosphereHex === '2') {
        return 'Atmosphere: Very Thin and Tainted Pressure: .2 Protection: Respirator, filter'
    } else if (atmosphereHex === '3') {
        return 'Atmosphere: Very Thin Pressure: .2 Pressure: .2 Protection: Respirator'
    } else if (atmosphereHex === '4') {
        return 'Atmosphere: Thin and Tainted Pressure: .6 Protection: Filter'
    } else if (atmosphereHex === '5') {
        return 'Atmosphere: Thin Pressure: .6 Protection: ---'
    } else if (atmosphereHex === '6'){
        return 'Atmosphere: Standard Pressure: 1.0 Protection: ---'
    } else if (atmosphereHex === '7'){
        return 'Atmosphere: Standard and Tainted Pressure: 1.0 Protection: Filter'
    } else if (atmosphereHex === '8'){
        return 'Atmosphere: Dense Pressure: 2.0 Protection: ---'
    } else if (atmosphereHex === '9'){
        return 'Atmosphere: Dense and Tainted Pressure: 2.0 Protection: Filter'
    } else if (atmosphereHex === 'A'){
        return 'Atmosphere: Exotic Pressure: Varies Protection: Air supply'
    } else if (atmosphereHex === 'B'){
        return 'Atmosphere: Corrosive Pressure: Varies Protection: Vacc suit'
    } else if (atmosphereHex === 'C'){
        return 'Atmosphere: Insidious Pressure: Varies Protection: Vacc suit'
    } else if (atmosphereHex === 'D'){
        return 'Atmosphere: Very Dense Pressure: 2.5+ Protection: ---'
    } else if (atmosphereHex === 'E'){
        return 'Atmosphere: Low Pressure: <.5 Protection: ---'
    } else if (atmosphereHex === 'F'){
        return 'Atmosphere: Unusual Pressure: Varies Protection: Varies'
    } else {
        return 'Atmosphere: None Pressure: 0.00 Protection: Vacc suit'
    }
        

}

function gravityParsing(uwp){
    const gravityHex = uwp[1]
    if (gravityHex === '1'){
        return '.05 G'
    } else if (gravityHex === '2'){
        return '.15 G'
    } else if (gravityHex === '3'){
        return '.25 G'
    } else if (gravityHex === '4'){
        return '.35 G'
    } else if (gravityHex === '5'){
        return '.45 G'
    } else if (gravityHex === '6'){
        return '.7 G'
    } else if (gravityHex === '7'){
        return '.9 G'
    } else if (gravityHex === '8'){
        return '1 G'
    } else if (gravityHex === '9'){
        return '1.25 G'
    } else if (gravityHex === 'A'){
        return '1.4 G'
    } else {
        return '0 G'
    }
}

function starPortParser(uwp){
    const starPortHex = uwp[0]
    if (starPortHex === 'A'){
        return 'Excellent'
    } else if (starPortHex === 'B'){
        return 'Good'
    } else if (starPortHex === 'C'){
        return 'Routine'
    } else if (starPortHex === 'D'){
        return 'Poor'
    } else if (starPortHex === 'E'){
        return 'Frontier'
    } else {
        return 'No Starport'
    }
}

module.exports = {
    starPortParser,
    uwpSanitizer,
    gravityParsing,
    atmosphereParsing,
    diceRoller,
    hydroParsing,
    hexifier,
}