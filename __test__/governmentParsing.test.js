const { governmentParsing } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("governmentParsing 0", () => {
  const input = "11111011";
  const actual = governmentParsing(input);
  const expected = "Gov: None";
  expect(actual).toEqual(expected);
});

test("governmentParsing 1", () => {
  const input = "11111111";
  const actual = governmentParsing(input);
  const expected = "Gov: Corporation";
  expect(actual).toEqual(expected);
});

test("governmentParsing 2", () => {
  const input = "11111211";
  const actual = governmentParsing(input);
  const expected = "Gov: Participating Democracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing 3", () => {
  const input = "11111311";
  const actual = governmentParsing(input);
  const expected = "Gov: Self-perpetuating Oligarchy";
  expect(actual).toEqual(expected);
});

test("governmentParsing 4", () => {
  const input = "11111411";
  const actual = governmentParsing(input);
  const expected = "Gov: Representative Democracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing 5", () => {
  const input = "11111511";
  const actual = governmentParsing(input);
  const expected = "Gov: Feudal Technocracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing 6", () => {
  const input = "11111611";
  const actual = governmentParsing(input);
  const expected = "Gov: Captive Government";
  expect(actual).toEqual(expected);
});

test("governmentParsing 7", () => {
  const input = "11111711";
  const actual = governmentParsing(input);
  const expected = "Gov: Balkanization";
  expect(actual).toEqual(expected);
});

test("governmentParsing 8", () => {
  const input = "11111811";
  const actual = governmentParsing(input);
  const expected = "Gov: Civil Service Bureaucracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing 9", () => {
  const input = "11111911";
  const actual = governmentParsing(input);
  const expected = "Gov: Impersonal Bureaucracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing A", () => {
  const input = "11111A11";
  const actual = governmentParsing(input);
  const expected = "Gov: Charismatic Dictator";
  expect(actual).toEqual(expected);
});

test("governmentParsing B", () => {
  const input = "11111B11";
  const actual = governmentParsing(input);
  const expected = "Gov: Non-Charismatic Dictator";
  expect(actual).toEqual(expected);
});

test("governmentParsing C", () => {
  const input = "11111C11";
  const actual = governmentParsing(input);
  const expected = "Gov: Charismatic Oligarchy";
  expect(actual).toEqual(expected);
});

test("governmentParsing D", () => {
  const input = "11111D11";
  const actual = governmentParsing(input);
  const expected = "Gov: Religious Dictatorship";
  expect(actual).toEqual(expected);
});

test("governmentParsing E", () => {
  const input = "11111E11";
  const actual = governmentParsing(input);
  const expected = "Gov: Religious Autocracy";
  expect(actual).toEqual(expected);
});

test("governmentParsing F", () => {
  const input = "11111F11";
  const actual = governmentParsing(input);
  const expected = "Gov: Totalitarian Oligarchy";
  expect(actual).toEqual(expected);
});
