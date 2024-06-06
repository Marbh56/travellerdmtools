const { main } = require("../SRC/main.js");
const { test, expect } = require("@jest/globals");

test("main B8888888", () => {
  const input = "B8686A7C";
  const actual = main(input);
  const expected = [
    "Starport: Good",
    "Gravity: 1.00 G",
    "Atmosphere: Standard Pressure: 1.0 Protection: ---",
    "Oceans: 76-85%",
    "Pop: 1,000,000",
    "Gov: Charismatic Dictator",
    "Law Level: 7",
    "Tech Level: 12",
  ].join("\n");
  expect(actual).toEqual(expected);
});
