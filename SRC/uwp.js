function uwpSanitizer(uwp) {
  const sanitizedUwp = uwp.toUpperCase();
  return sanitizedUwp;
}

function diceRoller(numDice) {
  let d = 0;
  for (let i = 0; i < numDice; i++) {
    d += Math.floor(Math.random() * 6) + 1;
  }
  return d;
}

function hexifier(char) {
  if (char >= "0" && char <= "9") {
    return parseInt(char, 10);
  } else if (char >= "A" && char <= "H") {
    return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
  } else {
    throw new Error("Invalid hexadecimal character");
  }
}

function techParsing(uwp) {
  const techHex = uwp[7];
  const result = String(hexifier(techHex));
  return `Tech Level: ${result}`;
}

function lawParsing(uwp) {
  const lawHex = uwp[6];
  const lawString = String(hexifier(lawHex));
  return `Law Level: ${lawString}`;
}

function bannedArmor(uwp) {
  const bannedArmorList = [
    "None",
    "Battle dress",
    "Combat armor",
    "Flak",
    "Cloth",
    "Mesh",
    "",
    "",
    "All visible armor",
    "All armor",
  ];

  const rawLawResult = lawParsing(uwp);
  const lawLevelString = rawLawResult.substring(10);
  const lawLevel = parseInt(lawLevelString, 10);
  let bannedArm = "";

  if (lawLevel === 8 || lawLevel === 9) {
    return bannedArmorList[lawLevel];
  } else {
    for (let i = lawLevel; i >= 0; i--) {
      bannedArm += bannedArmorList[i];
      if (i > 0) {
        bannedArm += ", ";
      }
    }
    return bannedArm + ".";
  }
}

function bannedWeapons(uwp) {
  const bannedWeaponList = [
    "None",
    "",
    "Portable energy, laser",
    "Military",
    "Light assault, SMG",
    "Personal concearlable",
    "All firearms except shotgun and stunners (carrying discouraged)",
    "Shotguns",
    "All bladed weapons, stunners",
    "All weapons",
  ];

  const lawLevel = parseInt(lawParsing(uwp), 10);
  let bannedWep = "";

  if (lawLevel === 8 || lawLevel === 9) {
    return bannedWeaponList[lawLevel];
  } else {
    for (let i = lawLevel; i >= 0; i--) {
      bannedWep += bannedWeaponList[i];
      if (i > 0) {
        bannedWep += ", ";
      }
    }
    return bannedWep + ".";
  }
}

function governmentParsing(uwp) {
  const govHex = uwp[5];
  if (govHex === "1") {
    return "Gov: Corporation";
  } else if (govHex === "2") {
    return "Gov: Participating Democracy";
  } else if (govHex === "3") {
    return "Gov: Self-perpetuating Oligarchy";
  } else if (govHex === "4") {
    return "Gov: Representative Democracy";
  } else if (govHex === "5") {
    return "Gov: Feudal Technocracy";
  } else if (govHex === "6") {
    return "Gov: Captive Government";
  } else if (govHex === "7") {
    return "Gov: Balkanization";
  } else if (govHex === "8") {
    return "Gov: Civil Service Bureaucracy";
  } else if (govHex === "9") {
    return "Gov: Impersonal Bureaucracy";
  } else if (govHex === "A") {
    return "Gov: Charismatic Dictator";
  } else if (govHex === "B") {
    return "Gov: Non-Charismatic Dictator";
  } else if (govHex === "C") {
    return "Gov: Charismatic Oligarchy";
  } else if (govHex === "D") {
    return "Gov: Religious Dictatorship";
  } else if (govHex === "E") {
    return "Gov: Religious Autocracy";
  } else if (govHex === "F") {
    return "Gov: Totalitarian Oligarchy";
  } else {
    return "Gov: None";
  }
}

function popParsing(uwp) {
  const popHex = hexifier(uwp[4]);
  const dirtyResult = Math.pow(10, popHex);
  const result = dirtyResult.toLocaleString();
  return `Pop: ${result}`;
}

function hydroParsing(uwp) {
  const hydroHex = uwp[3];
  if (hydroHex === "1") {
    return "Oceans: 6-15%";
  } else if (hydroHex === "2") {
    return "Oceans: 16-25%";
  } else if (hydroHex === "3") {
    return "Oceans: 26-35%";
  } else if (hydroHex === "4") {
    return "Oceans: 36-45%";
  } else if (hydroHex === "5") {
    return "Oceans: 46-55%";
  } else if (hydroHex === "6") {
    return "Oceans: 56-65%";
  } else if (hydroHex === "7") {
    return "Oceans: 66-75%";
  } else if (hydroHex === "8") {
    return "Oceans: 76-85%";
  } else if (hydroHex === "9") {
    return "Oceans: 86-95%";
  } else if (hydroHex === "A") {
    return "Oceans: 95-100%";
  } else {
    return "Oceans: 0-5%";
  }
}

function atmosphereParsing(uwp) {
  const atmosphereHex = uwp[2];
  if (atmosphereHex === "1") {
    return "Atmosphere: Trace Pressure: .05 Protection: Vacc Suit";
  } else if (atmosphereHex === "2") {
    return "Atmosphere: Very Thin and Tainted Pressure: .2 Protection: Respirator, filter";
  } else if (atmosphereHex === "3") {
    return "Atmosphere: Very Thin Pressure: .2 Pressure: .2 Protection: Respirator";
  } else if (atmosphereHex === "4") {
    return "Atmosphere: Thin and Tainted Pressure: .6 Protection: Filter";
  } else if (atmosphereHex === "5") {
    return "Atmosphere: Thin Pressure: .6 Protection: ---";
  } else if (atmosphereHex === "6") {
    return "Atmosphere: Standard Pressure: 1.0 Protection: ---";
  } else if (atmosphereHex === "7") {
    return "Atmosphere: Standard and Tainted Pressure: 1.0 Protection: Filter";
  } else if (atmosphereHex === "8") {
    return "Atmosphere: Dense Pressure: 2.0 Protection: ---";
  } else if (atmosphereHex === "9") {
    return "Atmosphere: Dense and Tainted Pressure: 2.0 Protection: Filter";
  } else if (atmosphereHex === "A") {
    return "Atmosphere: Exotic Pressure: Varies Protection: Air supply";
  } else if (atmosphereHex === "B") {
    return "Atmosphere: Corrosive Pressure: Varies Protection: Vacc suit";
  } else if (atmosphereHex === "C") {
    return "Atmosphere: Insidious Pressure: Varies Protection: Vacc suit";
  } else if (atmosphereHex === "D") {
    return "Atmosphere: Very Dense Pressure: 2.5+ Protection: ---";
  } else if (atmosphereHex === "E") {
    return "Atmosphere: Low Pressure: <.5 Protection: ---";
  } else if (atmosphereHex === "F") {
    return "Atmosphere: Unusual Pressure: Varies Protection: Varies";
  } else {
    return "Atmosphere: None Pressure: 0.00 Protection: Vacc suit";
  }
}

function gravityParsing(uwp) {
  const gravityHex = uwp[1];
  if (gravityHex === "1") {
    return "Gravity: 0.05 G";
  } else if (gravityHex === "2") {
    return "Gravity: 0.15 G";
  } else if (gravityHex === "3") {
    return "Gravity: 0.25 G";
  } else if (gravityHex === "4") {
    return "Gravity: 0.35 G";
  } else if (gravityHex === "5") {
    return "Gravity: 0.45 G";
  } else if (gravityHex === "6") {
    return "Gravity: 0.70 G";
  } else if (gravityHex === "7") {
    return "Gravity: 0.90 G";
  } else if (gravityHex === "8") {
    return "Gravity: 1.00 G";
  } else if (gravityHex === "9") {
    return "Gravity: 1.25 G";
  } else if (gravityHex === "A") {
    return "Gravity: 1.40 G";
  } else {
    return "Gravity: 0.00 G";
  }
}

function starPortParser(uwp) {
  const starPortHex = uwp[0];
  if (starPortHex === "A") {
    return "Starport: Excellent";
  } else if (starPortHex === "B") {
    return "Starport: Good";
  } else if (starPortHex === "C") {
    return "Starport: Routine";
  } else if (starPortHex === "D") {
    return "Starport: Poor";
  } else if (starPortHex === "E") {
    return "Starport: Frontier";
  } else {
    return "No Starport";
  }
}

module.exports = {
  starPortParser,
  uwpSanitizer,
  gravityParsing,
  atmosphereParsing,
  diceRoller,
  hydroParsing,
  hexifier,
  popParsing,
  governmentParsing,
  lawParsing,
  techParsing,
};
