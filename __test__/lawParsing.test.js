const { lawParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("lawParsing 0", () => {
  const input = "11111101";
  const actual = lawParsing(input);
  const expected = "0";
  expect(actual).toEqual(expected);
});

test("lawParsing 1", () => {
  const input = "11111111";
  const actual = lawParsing(input);
  const expected = "1";
  expect(actual).toEqual(expected);
});

test("lawParsing 2", () => {
  const input = "11111121";
  const actual = lawParsing(input);
  const expected = "2";
  expect(actual).toEqual(expected);
});

test("lawParsing 3", () => {
  const input = "11111131";
  const actual = lawParsing(input);
  const expected = "3";
  expect(actual).toEqual(expected);
});

test("lawParsing 4", () => {
  const input = "11111141";
  const actual = lawParsing(input);
  const expected = "4";
  expect(actual).toEqual(expected);
});

test("lawParsing 4", () => {
  const input = "11111141";
  const actual = lawParsing(input);
  const expected = "4";
  expect(actual).toEqual(expected);
});

test("lawParsing 5", () => {
  const input = "11111151";
  const actual = lawParsing(input);
  const expected = "5";
  expect(actual).toEqual(expected);
});

test("lawParsing 6", () => {
  const input = "11111161";
  const actual = lawParsing(input);
  const expected = "6";
  expect(actual).toEqual(expected);
});

test("lawParsing 7", () => {
  const input = "11111171";
  const actual = lawParsing(input);
  const expected = "7";
  expect(actual).toEqual(expected);
});

test("lawParsing 8", () => {
  const input = "11111181";
  const actual = lawParsing(input);
  const expected = "8";
  expect(actual).toEqual(expected);
});
test("lawParsing 9", () => {
  const input = "11111191";
  const actual = lawParsing(input);
  const expected = "9";
  expect(actual).toEqual(expected);
});
