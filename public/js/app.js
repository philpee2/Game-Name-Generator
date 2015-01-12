$(function() {
  fillInName();

  $('button').on('click', function() {
    fillInName();
  })
});

var generateName = function() {
  do {
    var first = _.sample(firsts);
    var last = _.sample(lasts);
    var subtitle = _.sample(subtitles);
    var franchise = first + last;
    var shouldSubtitle = _.sample([true, false]);
    var shouldNumber = _.sample([true, false]);
  } while (_.contains(realNames, franchise));

  var output = franchise;
  if (shouldNumber) {
    var number = _.random(2, 5);
    var shouldRoman = _.random(0, 2);
    if (shouldRoman === 0) {
      output += " " + convertToRoman(number);
    } else {
      output += " " + number;
    }

  }
  if (shouldSubtitle) {
    output += ": " + subtitle;
  }
  return output;
};

var fillInName = function() {
  var name = generateName();
  $('.name').html(name);
};

var firsts = ["Battle", "Blood", "Over", "Sky", "Kill", "Dark", "Black", "War", "Shadow"];
var lasts = ["cry", "field", "battle", "death", "dead", "borne", " Ops", "strike", "forge", "light", "fall"];
var subtitles = ["Revelations", "Origins", "Awakening", "Apocalypse", "Reckoning", "Damnation", "Legends", "Heroes", "Vengeance", "Revenge"];

var realNames = ["Battlecry", "Bloodborne", "Battleborne", "Battlefield", "Overstrike", "Black Ops", "Blacklight", "Skyfall", "Darkfall", "Shadowfall", "Skyforge", "Battleforge"];

var convertToRoman = function(num) {
  switch (num) {
    case 1:
      return "I";
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

