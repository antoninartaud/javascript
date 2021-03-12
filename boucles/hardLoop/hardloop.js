var numbers = [];

for (var i = 1; i <= 50; i++) {
  var minLimit = 0;
  var maxLimit = 100;

  numbers.push(Math.floor(Math.random() * (maxLimit-minLimit + 1)) + minLimit);
}

console.log(numbers);