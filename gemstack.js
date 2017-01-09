var GemStack = function(name, amount) {
  this.name = name;
  this.amount = amount;
};

var emerald = new GemStack("Emerald", 7);
var sapphire = new GemStack("Sapphire", 7);
var ruby = new GemStack("Ruby", 7);
var diamond = new GemStack("Diamond", 7);
var onyx = new GemStack("Onyx", 7);
var gold = new GemStack("Gold", 5);
var currentGems = [emerald, sapphire, ruby, diamond, onyx, gold];
