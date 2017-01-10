var GemStack = function(name, amount) {
  this.name = name;
  this.amount = amount;
};

function decrementHandler(gem) {
  console.log(currentGems);
  if (gem.amount > 0) {
    gem.amount -= 1;
  } else {
    alert("Can't take from this stack");
  }
  populateGems();
  console.log(currentGems);
}

function populateGems() {
  var gemPics = document.getElementsByClassName("gemImg");
  for (var i = 0; i < gemPics.length; i++) {
    gemPics[i].childNodes[3].innerHTML = "<span>" + currentGems[i].amount + "</span>";
  }
}

var emerald = new GemStack("Emerald", 7);
var sapphire = new GemStack("Sapphire", 7);
var ruby = new GemStack("Ruby", 7);
var diamond = new GemStack("Diamond", 7);
var onyx = new GemStack("Onyx", 7);
var gold = new GemStack("Gold", 5);
var currentGems = [emerald, sapphire, ruby, diamond, onyx, gold];

document.getElementById("emeraldGem").onclick = function() { decrementHandler(emerald); };
document.getElementById("sapphireGem").onclick = function() { decrementHandler(sapphire); };
document.getElementById("rubyGem").onclick = function() { decrementHandler(ruby); };
document.getElementById("diamondGem").onclick = function() { decrementHandler(diamond); };
document.getElementById("onyxGem").onclick = function() { decrementHandler(onyx); };
document.getElementById("goldGem").onclick = function() { decrementHandler(gold); };
