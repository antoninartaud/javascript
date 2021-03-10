var sentence = 'Hello Konexio';

var charsSentence = sentence.split('');
console.log(charsSentence);

var newSentence = []

for (var i = 0; i < sentence.length; i++) {
  newSentence += charsSentence.pop();
}

console.log(newSentence);



// essai sans nouvelle variable

// var sentence = 'Hello Konexio';

// sentence = sentence.split('');
// console.log(sentence);

// // console.log(charsSentence);

// var newSentence = []

// for (var i = 0; i < sentence.length; i++) {
//   newSentence += sentence.pop();
// }

// sentence = newSentence;

// console.log(sentence);


