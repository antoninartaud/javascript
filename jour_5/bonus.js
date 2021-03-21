// BONUS MOTUS

// - Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// - Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
//     - Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres
// ⇒ Si le joueur propose un mot qui n'a pas le bon nombre de lettres (ici 5) alors il a perdu
// ⇒ Si le joueur propose "BOTTE" et que le mot mystère est "BRUTE" attention : un des "T" proposés doit rester neutre !
// À l'aide du package `prompt` que vous connaissez, et du package `colors` (cherchez le sur NPM et lisez la doc), tentez d'écrire un code qui peut permettre à l'utilisateur de jouer à Motus. Si vous réussissez : [bravo !](https://youtu.be/Kz4-Z-s5R9o) Sinon : [dommage...](https://youtu.be/y_sG_lPgMvk)

var prompt = require('prompt');

var randomWordsArray = ['disco', 'salle', 'tombe', 'devis', 'bacon', 'douze', 'cygne', 'astre', 'civet', 'panne', 'piano', 'exode', 'prise', 'atour', 'quota'];

var minNumber = 0;
var maxNumber = randomWordsArray.length - 1;


var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
// console.log(randomNumber);

var mysteryWord = randomWordsArray[randomNumber];
console.log(mysteryWord);

function play() {
var mysteryWordSplit = mysteryWord.split('');
console.log('mysteryWordSplit', mysteryWordSplit);

var mysteryWordFirsLetter = mysteryWordSplit.shift();
console.log('mysteryWordFirsLetter',mysteryWordFirsLetter);

var mysteryWord4lastLetters = mysteryWordSplit;
console.log('mysteryWord4lastLetters array', mysteryWord4lastLetters);


mysteryWord4lastLetters= mysteryWord4lastLetters.join('').replace(/([a-zA-Z])/g,'*');
console.log('mysteryWord4lastLetters string', mysteryWord4lastLetters);

var mysteryWordStars = `${mysteryWordFirsLetter}${mysteryWord4lastLetters}`;

console.log(mysteryWordStars);


prompt.start();

var schema = {
  properties: {
    wordUser: {
      description: 'What\'s your word ?',
      pattern: /([a-zA-Z]){5}/g,
      required: true,
      message: 'Choose a word with exactly 5 letters please!'
    },
  
  }
}


prompt.get(schema, function (err, result) {
  

  console.log('Command-line input received:');
  console.log('Mot choisi: ' + result.wordUser);
  // console.log('  email: ' + result.email);
  }
);
}

play();