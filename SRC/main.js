const {
  starPortParser,
  gravityParsing,
  hydroParsing,
  atmosphereParsing,
  popParsing,
  governmentParsing,
  lawParsing,
  techParsing,
} = require("../src/uwp.js");

function main(uwp) {
  let results = "";
  const parsingFunctions = [
    starPortParser,
    gravityParsing,
    atmosphereParsing,
    hydroParsing,
    popParsing,
    governmentParsing,
    lawParsing,
    techParsing,
  ];
  for (let i = 0; i < parsingFunctions.length; i++) {
    results += parsingFunctions[i](uwp);
    if (i < parsingFunctions.length - 1) {
      results += "\n";
    }
  }
  //console.log(results);
  return results;
}

module.exports = { main };
