var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var newWords = [];
var charO = 0;

for (var i = 0; i < words.length; i++){
  newWords += words[i].split(' ').join('');
  // for (var i = 0; i < newWords.length; i++){
  //   if (newWords[i] === 'o') {
  //   charO++;
  //   }
  // }
}

// console.log(charO);
var indexChar = newWords.search('o');
console.log(indexChar);
console.log(newWords);

console.log(newWords[0]);