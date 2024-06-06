const { hexifier } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("hexifier 1", () => {
  const input = "1";
  const actual = hexifier(input);
  const expected = 1;
  expect(actual).toEqual(expected);
});

test("hexifier 2", () => {
  const input = "2";
  const actual = hexifier(input);
  const expected = 2;
  expect(actual).toEqual(expected);
});

test("hexifier 3", () => {
  const input = "3";
  const actual = hexifier(input);
  const expected = 3;
  expect(actual).toEqual(expected);
});

test("hexifier 4", () => {
  const input = "4";
  const actual = hexifier(input);
  const expected = 4;
  expect(actual).toEqual(expected);
});

test("hexifier 5", () => {
  const input = "5";
  const actual = hexifier(input);
  const expected = 5;
  expect(actual).toEqual(expected);
});

test("hexifier 6", () => {
  const input = "6";
  const actual = hexifier(input);
  const expected = 6;
  expect(actual).toEqual(expected);
});

test("hexifier 7", () => {
  const input = "7";
  const actual = hexifier(input);
  const expected = 7;
  expect(actual).toEqual(expected);
});

test("hexifier 8", () => {
  const input = "8";
  const actual = hexifier(input);
  const expected = 8;
  expect(actual).toEqual(expected);
});

test("hexifier 9", () => {
  const input = "9";
  const actual = hexifier(input);
  const expected = 9;
  expect(actual).toEqual(expected);
});

test("hexifier A", () => {
  const input = "A";
  const actual = hexifier(input);
  const expected = 10;
  expect(actual).toEqual(expected);
});

test("hexifier B", () => {
  const input = "B";
  const actual = hexifier(input);
  const expected = 11;
  expect(actual).toEqual(expected);
});

test("hexifier C", () => {
  const input = "C";
  const actual = hexifier(input);
  const expected = 12;
  expect(actual).toEqual(expected);
});

test("hexifier D", () => {
  const input = "D";
  const actual = hexifier(input);
  const expected = 13;
  expect(actual).toEqual(expected);
});

test("hexifier E", () => {
  const input = "E";
  const actual = hexifier(input);
  const expected = 14;
  expect(actual).toEqual(expected);
});

test("hexifier F", () => {
  const input = "F";
  const actual = hexifier(input);
  const expected = 15;
  expect(actual).toEqual(expected);
});

test("hexifier G", () => {
  const input = "G";
  const actual = hexifier(input);
  const expected = 16;
  expect(actual).toEqual(expected);
});

test("hexifier H", () => {
  const input = "H";
  const actual = hexifier(input);
  const expected = 17;
  expect(actual).toEqual(expected);
});
