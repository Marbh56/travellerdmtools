function diceRoller(numDice) {
  let d = 0;
  for (let i = 0; i < numDice; i++) {
    d += Math.floor(Math.random() * 6) + 1;
  }
  return d;
}

module.exports = {
  diceRoller,
};
