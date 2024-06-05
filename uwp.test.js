const { starPortParser, uwpSanitizer, gravityParsing, atmosphereParsing, } = require('./uwp.js')
const {test, expect } = require('@jest/globals')

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


test('starPortParser C', () => {
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