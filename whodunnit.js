// Scenario 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Code will run as intended and will print "The murderer is Miss Scarlet."

// Scenario 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Error - assignment to constant variable. murderer has been assigned as a constant and cannot be reassigned.

// Scenario 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// First verdict - "The murderer is Mrs. Peacock." Second verdict - "The murderer is Professor Plum." assignment of murderer to "Mrs. Peacock" is local to declareMurderer.

// Scenario 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Suspects: "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." Suspect 3: "Suspect three is Mrs. Peacock."
// Reassignment of suspectThree to "Colonel Mustart" is local to declareAllSuspects.

// Scenario 5
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// "The weapon is the Revolver". Properties of a constant can be changed - it is only the reference itself that cannot be reassigned.

// Scenario 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Verdict: "The murderer is Mrs. White." murderer is not a constant and reassignment is not local.

// Scenario 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Verdict: "The murderer is Mr. Green." Reassignment of murder to "Mr Green" is not local.
// However, in plotTwist, murderer is declared as a local variable with "let", so when murderer is reassigned to "Miss Scarlet" it is only the local murderer that is reassigned.

// Scenario 8
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Verdict: "The weapon is Candle Stick." Property reassignment is not local. All conditions are met for plotTwist and unexpectedOutcome, and scenario.weapon is reassigned to "Candle Stick."

// Scenario 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Verdict: "The murderer is Professor Plum." let is local in scope, so murderer is only reassigned locally.

// Scenario 10
const scenario1 = {
  murderer: "Professor Plum",
  room: "Conservatory"
};

const skullduggery = function() {
  let scenario2 = scenario1;
  scenario2.murderer = "Miss Scarlet";
  scenario2 = "just kidding, it's Professor Plum.";
};

const declareMurderer = function() {
  return `The murderer is ${scenario1.murderer}.`;
}

const verdict1 = declareMurderer();
console.log(verdict1);
skullduggery();
const verdict2 = declareMurderer();
console.log(verdict2);

// Verdict 1: "The murderer is Professor Plum." Verdict 2: "The murderer is Miss Scarlet."
// I have no idea how this works.
