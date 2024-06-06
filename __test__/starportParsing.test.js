const { starPortParser } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("starPortParser 0", () => {
  const input = "X1111111";
  const actual = starPortParser(input);
  const expected = "No Starport";
  expect(actual).toEqual(expected);
});

test("starPortParser A", () => {
  const input = "A1111111";
  const actual = starPortParser(input);
  const expected = "Excellent";
  expect(actual).toEqual(expected);
});

test("starPortParser B", () => {
  const input = "B1111111";
  const actual = starPortParser(input);
  const expected = "Good";
  expect(actual).toEqual(expected);
});

test("starPortParser C", () => {
  const input = "C1111111";
  const actual = starPortParser(input);
  const expected = "Routine";
  expect(actual).toEqual(expected);
});

test("starPortParser D", () => {
  const input = "D1111111";
  const actual = starPortParser(input);
  const expected = "Poor";
  expect(actual).toEqual(expected);
});

test("starPortParser E", () => {
  const input = "E1111111";
  const actual = starPortParser(input);
  const expected = "Frontier";
  expect(actual).toEqual(expected);
});
