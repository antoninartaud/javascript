var myTableau = [];
var min = 0;
var max = 100;

for (var i = 0; i <= 20; i++) {
  // myTableau.push(Math.floor(Math.random() * (max - min) + min));
  myTableau.push(Math.floor(Math.random() * (max - min +1)) + min);
}

console.log(myTableau);


var highestNum = 0;

for (var i = 0; i <= myTableau.length; i++){
  if (myTableau[i] > highestNum) {
    highestNum = myTableau[i];
  }
}

console.log("Entier le plus grand: ",highestNum);