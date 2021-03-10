var number = 2.422;
var roundedNumber;
// var decimal = roundedNumber - Math.floor(roundedNumber) solution
var numberAfterDecimal = number % 1;


if (numberAfterDecimal < 0.5) {
  roundedNumber = Math.floor(number);
  console.log(roundedNumber);
} else if (numberAfterDecimal >= 0.5) {
  roundedNumber = Math.ceil(number);
  console.log(roundedNumber);
}


// String version by night  et par des chemins de traverse -)
// number.substring("indexOf")
var strNumber = number.toString();

strNumber = strNumber.split('.');

var decimalStringNumber = '.' + strNumber[1];


if (decimalStringNumber >= 0.5) {
  roundedNumber = Math.ceil(number);
  console.log(roundedNumber)
} else {
  roundedNumber = Math.floor(number);
  console.log(roundedNumber);
}



// Fasulu solution
//var roundedNumber = 10.66465464514;
var strNum = roundedNumber.toString();

var [a, b] = strNum.split(".");
// console.log(b, typeof b);
var numDecimal = b.substring(0,1);
// console.log(numDecimal);

if(parseInt(numDecimal) < 5) {
    console.log(Math.floor(roundedNumber));
} else {
    console.log(Math.ceil(roundedNumber));
}//