var numMin = 65;
var numMax = 90;
var word = [];
var password = "";


function generatePassword(num) {
  if (num < 6 || num > 15) {
    console.log('error');
    return;
  }

  for (var i = 1; i <= num; i++) {
    word.push(Math.floor(Math.random() * (numMax - numMin + 1)) + numMin);
  }

  for (var j = 0; j < word.length; j++) {
    password += String.fromCharCode(word[i]);
  }

  console.log(`Your password is: ${password}`);
  
}

generatePassword(14);