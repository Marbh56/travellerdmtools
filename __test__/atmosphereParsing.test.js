const { atmosphereParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("atmosphereParsing 0 ", () => {
  const input = "11011111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: None Pressure: 0.00 Protection: Vacc suit";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 1 ", () => {
  const input = "11111111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Trace Pressure: .05 Protection: Vacc Suit";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 2 ", () => {
  const input = "11211111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Very Thin and Tainted Pressure: .2 Protection: Respirator, filter";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 3 ", () => {
  const input = "11311111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Very Thin Pressure: .2 Pressure: .2 Protection: Respirator";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 4 ", () => {
  const input = "11411111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Thin and Tainted Pressure: .6 Protection: Filter";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 5 ", () => {
  const input = "11511111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Thin Pressure: .6 Protection: ---";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 6 ", () => {
  const input = "11611111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Standard Pressure: 1.0 Protection: ---";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 7 ", () => {
  const input = "11711111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Standard and Tainted Pressure: 1.0 Protection: Filter";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 8 ", () => {
  const input = "11811111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Dense Pressure: 2.0 Protection: ---";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing 9 ", () => {
  const input = "11911111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Dense and Tainted Pressure: 2.0 Protection: Filter";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing A ", () => {
  const input = "11A11111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Exotic Pressure: Varies Protection: Air supply";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing B ", () => {
  const input = "11B11111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Corrosive Pressure: Varies Protection: Vacc suit";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing C ", () => {
  const input = "11C11111";
  const actual = atmosphereParsing(input);
  const expected =
    "Atmosphere: Insidious Pressure: Varies Protection: Vacc suit";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing D ", () => {
  const input = "11D11111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Very Dense Pressure: 2.5+ Protection: ---";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing E ", () => {
  const input = "11E11111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Low Pressure: <.5 Protection: ---";
  expect(actual).toEqual(expected);
});

test("atmosphereParsing F ", () => {
  const input = "11F11111";
  const actual = atmosphereParsing(input);
  const expected = "Atmosphere: Unusual Pressure: Varies Protection: Varies";
  expect(actual).toEqual(expected);
});
