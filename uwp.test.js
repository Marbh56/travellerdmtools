const { starPortParser, uwpSanitizer} = require('./uwp.js')
const {test, expect } = require('@jest/globals')

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