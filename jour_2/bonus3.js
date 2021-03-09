var number = 2.122;
var roundedNumber;
var numberAfterDecimal = number % 1;

if (numberAfterDecimal < 0.5) {
  roundedNumber = Math.floor(number);
  console.log(roundedNumber);
} else if (numberAfterDecimal >= 0.5) {
  roundedNumber = Math.ceil(number);
  console.log(roundedNumber);
}

numberAfterDecimal = numberAfterDecimal.toString();
console.log(numberAfterDecimal);
