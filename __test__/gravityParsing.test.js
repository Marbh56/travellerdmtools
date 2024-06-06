const { gravityParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("gravityParsing 0 ", () => {
  const input = "10111111";
  const actual = gravityParsing(input);
  const expected = "0.00 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 1 ", () => {
  const input = "11111111";
  const actual = gravityParsing(input);
  const expected = "0.05 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 2 ", () => {
  const input = "12111111";
  const actual = gravityParsing(input);
  const expected = "0.15 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 3 ", () => {
  const input = "13111111";
  const actual = gravityParsing(input);
  const expected = "0.25 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 4 ", () => {
  const input = "14111111";
  const actual = gravityParsing(input);
  const expected = "0.35 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 5 ", () => {
  const input = "15111111";
  const actual = gravityParsing(input);
  const expected = "0.45 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 6 ", () => {
  const input = "16111111";
  const actual = gravityParsing(input);
  const expected = "0.70 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 7 ", () => {
  const input = "17111111";
  const actual = gravityParsing(input);
  const expected = "0.90 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 8 ", () => {
  const input = "18111111";
  const actual = gravityParsing(input);
  const expected = "1.00 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 9 ", () => {
  const input = "19111111";
  const actual = gravityParsing(input);
  const expected = "1.25 G";
  expect(actual).toEqual(expected);
});

test("gravityParsing 10 or A ", () => {
  const input = "1A111111";
  const actual = gravityParsing(input);
  const expected = "1.40 G";
  expect(actual).toEqual(expected);
});
