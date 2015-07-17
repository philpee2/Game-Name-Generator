$(function() {
  fillInName();

  $('button').on('click', function() {
    fillInName();
  })
});

function generateName() {
  do {
    var first = _.sample(firsts);
    var last = _.sample(lasts);
    var franchise = first + last;
    var subtitle = _.sample(subtitles);

    // whether or not to include a subtitle
    var shouldSubtitle = _.sample([true, false]);
    // whether or not to include a number
    var shouldNumber = _.sample([true, false]);
  // realNames contains a blacklist of actual franchises. I don't want the
  // generator to produce names of real properties.
  } while (_.contains(realNames, franchise));

  var output = franchise;
  if (shouldNumber) {
    var number = _.random(2, 5);
    var shouldRoman = _.sample([true, false]);
    if (shouldRoman) {
      number = convertToRoman(number);
    }
      output += " " + number;
  }

  if (shouldSubtitle) {
    output += ": " + subtitle;
  }
  return output;
}

function fillInName() {
  var name = generateName();
  $('.name').html(name);
}

// The building blocks of a modern video game name
var firsts = ["Battle", "Blood", "Over", "Sky", "Kill", "Dark", "Black", "War",
  "Shadow"];
var lasts = ["cry", "field", "battle", "death", "dead", "borne", " Ops",
  "strike", "forge", "light", "fall"];
var subtitles = ["Revelations", "Origins", "Awakening", "Apocalypse",
  "Reckoning", "Damnation", "Legends", "Heroes", "Vengeance", "Revenge"];

// Somewhat amusing how large this list has to be
var realNames = ["Battlecry", "Bloodborne", "Battleborne", "Battlefield",
  "Overstrike", "Black Ops", "Blacklight", "Skyfall", "Darkfall", "Shadowfall",
  "Skyforge", "Battleforge", "Battlestrike", "Bloodstrike", "Bloodforge",
  "Skyborne", "Warcry"];

// For the purposes of this code, num is between 2 and 5
function convertToRoman(num) {
  switch (num) {
    case 2:
      return "II";
    case 3:
      return "III";
    case 4:
      return "IV";
    case 5:
      return "V";
  }
}

