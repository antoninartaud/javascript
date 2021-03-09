var number = 2.622;
var roundedNumber;
var numberAfterDecimal = number % 1;

if (numberAfterDecimal < 0.5) {
  roundedNumber = Math.floor(number);
  console.log(roundedNumber);
} else if (numberAfterDecimal >= 0.5) {
  roundedNumber = Math.ceil(number);
  console.log(roundedNumber);
}


// String version by night  et par des chemins de traverse -)
var strNumber = number.toString();

strNumber = strNumber.split('.');

var decimalStringNumber = '0' + '.' + strNumber[1];

if (decimalStringNumber >= 0.5) {
  roundedNumber = Math.ceil(number);
  console.log(roundedNumber)
} else {
  roundedNumber = Math.floor(number);
  console.log(roundedNumber);
}