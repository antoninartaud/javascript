// ### 03 - Unique

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

// à l'aide d'une boucle while affichez le premier élément de votre tableau superieur ou égal à 75 et inferieur ou égal à 100

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