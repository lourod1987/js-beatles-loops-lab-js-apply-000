function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  
  for (let i = 0; i < musicians.length; i++) {
    var string;
    string = musicians[i] + " plays " + instruments[i];
    newArr.push(string);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < 15) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var beatlesLove = [];
  
  do {
    var string = "I love the Beatles!";
    beatlesLove.push(string);
    number++;
  } while (number < 15);
  return beatlesLove;
}