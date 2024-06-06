const { diceRoller } = require("../src/uwp.js");
const { test, expect } = require("@jest/globals");

test("always returns a value within the expected range", () => {
  const numDice = 5;
  const result = diceRoller(numDice);
  // The minimum value is 5 (1*5) and the maximum value is 30 (6*5)
  expect(result).toBeGreaterThanOrEqual(5);
  expect(result).toBeLessThanOrEqual(30);
});
