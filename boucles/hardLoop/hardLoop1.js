var numbers = [];

for (var i = 1; i <= 50; i++) {
  var minLimit = 50;
  var maxLimit = 200;

  numbers.push(Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit);
}

console.log(numbers);

for (var i = 0; i < numbers.length; i++) {
  var maxNumbers = 0;
  if (numbers[i] > maxNumbers){
    maxNumbers = numbers[i];
  }
}

console.log(maxNumbers);