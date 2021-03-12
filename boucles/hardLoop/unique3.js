var numbers = [];

for (var i = 1; i <= 50; i++) {
  var minLimit = 50;
  var maxLimit = 200;

  numbers.push(Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit);
}

console.log(numbers);


var intervalNumber = 0;

while (!(intervalNumber >= 75 && intervalNumber <= 100)) {
  intervalNumber= numbers.shift();
}

console.log(`Le premier nombre du tableau compris dans l'interval est: ${intervalNumber}`);