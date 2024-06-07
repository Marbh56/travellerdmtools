document
  .getElementById("passageFreightDataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const passageFreightFormData = new FormData(this);
    const playerRoll = passageFreightFormData.get("diceRoll");
    const stewardSkill = passageFreightFormData.get("stewardSkill");
    const uwp = passageFreightFormData.get("uwp");
    const travelAdvisory = passageFreightFormData.get("advisory");
    passageFreight(playerRoll, stewardSkill, uwp, travelAdvisory);
  });

function effectCheck(roll) {
  const intRoll = parseInt(roll);
  const result = intRoll - 8;
  return result;
}

function passageFreight() {}

module.exports = {
  effectCheck,
};
