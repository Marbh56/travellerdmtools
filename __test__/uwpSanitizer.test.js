const { uwpSanitizer } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("uwpSanitizer", () => {
  const input = "abcdef";
  const actual = uwpSanitizer(input);
  const expected = "ABCDEF";
  expect(actual).toEqual(expected);
});
