// Math.floor() donne premier entier inférieur
// Math.ceil() donne premier entier supérieur
// Math.round() donne premier entier inférieur ou supérieur sauf demi entier supérieur
// var number = 2.5;
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
