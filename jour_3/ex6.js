var sentence = 'Hello Konexio !';

var charsSentence = sentence.split('');
console.log(charsSentence);

var newSentence = []

for (var i = 0; i < sentence.length; i++) {
  newSentence += charsSentence.pop();
}

console.log(newSentence);



