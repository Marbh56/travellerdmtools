function uwpSanitizer(uwp){
    const sanitizedUwp = uwp.toUpperCase()
    return sanitizedUwp
}

function gravityParsing(uwp){
    const gravityHex = uwp[1]
    console.log(gravityHex)
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
}