const { techParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("techParsing 0", () => {
  const input = "11111110";
  const actual = techParsing(input);
  const expected = "Tech Level: 0";
  expect(actual).toEqual(expected);
});

test("techParsing 1", () => {
  const input = "11111111";
  const actual = techParsing(input);
  const expected = "Tech Level: 1";
  expect(actual).toEqual(expected);
});

test("techParsing 2", () => {
  const input = "11111112";
  const actual = techParsing(input);
  const expected = "Tech Level: 2";
  expect(actual).toEqual(expected);
});

test("techParsing 3", () => {
  const input = "11111113";
  const actual = techParsing(input);
  const expected = "Tech Level: 3";
  expect(actual).toEqual(expected);
});

test("techParsing 4", () => {
  const input = "11111114";
  const actual = techParsing(input);
  const expected = "Tech Level: 4";
  expect(actual).toEqual(expected);
});

test("techParsing 5", () => {
  const input = "11111115";
  const actual = techParsing(input);
  const expected = "Tech Level: 5";
  expect(actual).toEqual(expected);
});

test("techParsing 6", () => {
  const input = "11111116";
  const actual = techParsing(input);
  const expected = "Tech Level: 6";
  expect(actual).toEqual(expected);
});

test("techParsing 7", () => {
  const input = "11111117";
  const actual = techParsing(input);
  const expected = "Tech Level: 7";
  expect(actual).toEqual(expected);
});

test("techParsing 8", () => {
  const input = "11111118";
  const actual = techParsing(input);
  const expected = "Tech Level: 8";
  expect(actual).toEqual(expected);
});

test("techParsing 9", () => {
  const input = "11111119";
  const actual = techParsing(input);
  const expected = "Tech Level: 9";
  expect(actual).toEqual(expected);
});

test("techParsing A", () => {
  const input = "1111111A";
  const actual = techParsing(input);
  const expected = "Tech Level: 10";
  expect(actual).toEqual(expected);
});

test("techParsing B", () => {
  const input = "1111111B";
  const actual = techParsing(input);
  const expected = "Tech Level: 11";
  expect(actual).toEqual(expected);
});

test("techParsing C", () => {
  const input = "1111111C";
  const actual = techParsing(input);
  const expected = "Tech Level: 12";
  expect(actual).toEqual(expected);
});

test("techParsing D", () => {
  const input = "1111111D";
  const actual = techParsing(input);
  const expected = "Tech Level: 13";
  expect(actual).toEqual(expected);
});

test("techParsing E", () => {
  const input = "1111111E";
  const actual = techParsing(input);
  const expected = "Tech Level: 14";
  expect(actual).toEqual(expected);
});

test("techParsing F", () => {
  const input = "1111111F";
  const actual = techParsing(input);
  const expected = "Tech Level: 15";
  expect(actual).toEqual(expected);
});

test("techParsing G", () => {
  const input = "1111111G";
  const actual = techParsing(input);
  const expected = "Tech Level: 16";
  expect(actual).toEqual(expected);
});

test("techParsing H", () => {
  const input = "1111111H";
  const actual = techParsing(input);
  const expected = "Tech Level: 17";
  expect(actual).toEqual(expected);
});
