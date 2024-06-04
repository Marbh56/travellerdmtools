function uwpSanitizer(uwp){
    const sanitizedUwp = uwp.toUpperCase()
    return sanitizedUwp
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
}