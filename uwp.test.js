const { starPortParser,
  uwpSanitizer, 
  gravityParsing, 
  atmosphereParsing,
  diceRoller,
  hydroParsing,
  hexifier,
  popParsing,
  governmentParsing,
} = require('./uwp.js')
const {test, expect } = require('@jest/globals')

test('governmentParsing 8', () => {
  const input = '11111811'
  const actual = governmentParsing(input)
  const expected = 'Civil Service Bureaucracy'
  expect(actual).toEqual(expected)
})

test('popParsing Hex', () => {
  const input = '1111F111'
  const actual = popParsing(input)
  const expected = "Pop: 1000000000000000"
  expect(actual).toEqual(expected)
})

test('popParsing non Hex', () => {
  const input = '11118111'
  const actual = popParsing(input)
  const expected = "Pop: 100000000"
  expect(actual).toEqual(expected)
})

test('hexifier Hex', () => {
  const input = 'F'
  const actual = hexifier(input)
  const expected = 15
  expect(actual).toEqual(expected)
})

test('hexifier Int', () => {
  const input = '4'
  const actual = hexifier(input)
  const expected = 4
  expect(actual).toEqual(expected)
})

test('hydroParsing 8', () => {
  const input = '11181'
  const actual = hydroParsing(input)
  const expected = '76-85%'
  expect(actual).toEqual(expected)
})

test('always returns a value within the expected range', () => {
  const numDice = 5;
  const result = diceRoller(numDice);
  // The minimum value is 5 (1*5) and the maximum value is 30 (6*5)
  expect(result).toBeGreaterThanOrEqual(5);
  expect(result).toBeLessThanOrEqual(30);
});

test('atmosphereParsing 8', () => {
  const input = '11811'
  const actual = atmosphereParsing(input)
  const expected = 'Atmosphere: Dense Pressure: 2.0 Protection: ---'
  expect(actual).toEqual(expected)
})

test('gravityParsing 1', () => {
  const input = '11234' 
  const actual = gravityParsing(input)
  const expected = '.05 G'
  expect(actual).toEqual(expected)
})

test('gravityParsing 2', () => {
  const input = '12234'
  const actual = gravityParsing(input)
  const expected = '.15 G'
  expect(actual).toEqual(expected)
})


test('uwpSanitizer', () => {
    const input = 'abcdef'
    const actual = uwpSanitizer(input)
    const expected = 'ABCDEF'
    expect(actual).toEqual(expected)
  })

test('starPortParser A', () => {
    const input = 'A1234'
    const actual = starPortParser(input)
    const expected = 'Excellent'
    expect(actual).toEqual(expected)
  })

  test('starPortParser B', () => {
    const input = 'B1234'
    const actual = starPortParser(input)
    const expected = 'Good'
    expect(actual).toEqual(expected)
  })

  test('starPortParser C', () => {
    const input = 'C1234'
    const actual = starPortParser(input)
    const expected = 'Routine'
    expect(actual).toEqual(expected)
  })

  test('starPortParser D', () => {
    const input = 'D1234'
    const actual = starPortParser(input)
    const expected = 'Poor'
    expect(actual).toEqual(expected)
  })

  test('starPortParser E', () => {
    const input = 'E1234'
    const actual = starPortParser(input)
    const expected = 'Frontier'
    expect(actual).toEqual(expected)
  })

  test('starPortParser C', () => {
    const input = '11234'
    const actual = starPortParser(input)
    const expected = 'No Starport'
    expect(actual).toEqual(expected)
  })