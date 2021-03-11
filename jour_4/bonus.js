var numMin = 65;
var numMax = 90;
password = [];

function generatePassword(num) {
  if (num < 6 || num > 15) {
    console.log('error');
    return
  }
  for (var i = 1; i <= num; i++) {
    password.push(Math.floor(Math.random() * (numMax - numMin + 1)) + numMin);
    console.log(password);
    // console.log(typeof password);
  }
  for (var i = 0; i < password.length; i++) {
    var pass = String.fromCharCode(password[i]);
    // console.log(pass);
  }
  password = pass;
  console.log(password);
  
}

generatePassword(9);