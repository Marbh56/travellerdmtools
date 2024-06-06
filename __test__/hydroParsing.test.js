const { hydroParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("hydroParsing 0", () => {
  const input = "11101111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 0-5%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 1", () => {
  const input = "11111111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 6-15%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 2", () => {
  const input = "11121111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 16-25%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 3", () => {
  const input = "11131111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 26-35%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 4", () => {
  const input = "11141111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 36-45%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 5", () => {
  const input = "11151111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 46-55%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 6", () => {
  const input = "11161111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 56-65%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 7", () => {
  const input = "11171111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 66-75%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 8", () => {
  const input = "11181111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 76-85%";
  expect(actual).toEqual(expected);
});

test("hydroParsing 9", () => {
  const input = "11191111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 86-95%";
  expect(actual).toEqual(expected);
});

test("hydroParsing A", () => {
  const input = "111A1111";
  const actual = hydroParsing(input);
  const expected = "Oceans: 95-100%";
  expect(actual).toEqual(expected);
});
