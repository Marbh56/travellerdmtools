const { popParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("popParsing 0", () => {
  const input = "11110111";
  const actual = popParsing(input);
  const expected = "Pop: 1";
  expect(actual).toEqual(expected);
});

test("popParsing 1", () => {
  const input = "11111111";
  const actual = popParsing(input);
  const expected = "Pop: 10";
  expect(actual).toEqual(expected);
});

test("popParsing 2", () => {
  const input = "11112111";
  const actual = popParsing(input);
  const expected = "Pop: 100";
  expect(actual).toEqual(expected);
});

test("popParsing 3", () => {
  const input = "11113111";
  const actual = popParsing(input);
  const expected = "Pop: 1000";
  expect(actual).toEqual(expected);
});

test("popParsing 4", () => {
  const input = "11114111";
  const actual = popParsing(input);
  const expected = "Pop: 10000";
  expect(actual).toEqual(expected);
});

test("popParsing 5", () => {
  const input = "11115111";
  const actual = popParsing(input);
  const expected = "Pop: 100000";
  expect(actual).toEqual(expected);
});

test("popParsing 6", () => {
  const input = "11116111";
  const actual = popParsing(input);
  const expected = "Pop: 1000000";
  expect(actual).toEqual(expected);
});
test("popParsing 7", () => {
  const input = "11117111";
  const actual = popParsing(input);
  const expected = "Pop: 10000000";
  expect(actual).toEqual(expected);
});

test("popParsing 8", () => {
  const input = "11118111";
  const actual = popParsing(input);
  const expected = "Pop: 100000000";
  expect(actual).toEqual(expected);
});

test("popParsing 9", () => {
  const input = "11119111";
  const actual = popParsing(input);
  const expected = "Pop: 1000000000";
  expect(actual).toEqual(expected);
});

test("popParsing A", () => {
  const input = "1111A111";
  const actual = popParsing(input);
  const expected = "Pop: 10000000000";
  expect(actual).toEqual(expected);
});

test("popParsing B", () => {
  const input = "1111B111";
  const actual = popParsing(input);
  const expected = "Pop: 100000000000";
  expect(actual).toEqual(expected);
});

test("popParsing C", () => {
  const input = "1111C111";
  const actual = popParsing(input);
  const expected = "Pop: 1000000000000";
  expect(actual).toEqual(expected);
});

test("popParsing D", () => {
  const input = "1111D111";
  const actual = popParsing(input);
  const expected = "Pop: 10000000000000";
  expect(actual).toEqual(expected);
});

test("popParsing E", () => {
  const input = "1111E111";
  const actual = popParsing(input);
  const expected = "Pop: 100000000000000";
  expect(actual).toEqual(expected);
});

test("popParsing Hex", () => {
  const input = "1111F111";
  const actual = popParsing(input);
  const expected = "Pop: 1000000000000000";
  expect(actual).toEqual(expected);
});
