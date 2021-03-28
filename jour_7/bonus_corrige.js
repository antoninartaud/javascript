var prompt = require('prompt');
var randomWords = require('random-words');

var mysteryWord = randomWords();

// Just for testing before finishing the code
// var mysteryWord = "pride";
// console.log("mysteryWord:", mysteryWord);

// var unfinishedWord = "__i_e"; // another way of resolving the exercise

// Where I'll save the letters entered by the user
var letters = [];

// Initial value of the number of missing letters is the same of the amount of letters of my mystery word
var numMissingLetters = mysteryWord.length;

// Because it's the first time, it shows: _ _ _ _ _
console.log('Your word for now is: ', getUnfinishedWord(mysteryWord));

// Simulation:
// console.log("_____");
// //e
// console.log("____e");
// //i
// console.log("__i_e");
// //a
// console.log("__i_e");

function getUnfinishedWord(word) {
  // One liner ES5
  // return word.split("").map(function (element) { return letters.indexOf(element) === -1 ? "_" : element; }).join(" ");

  // One liner ES6
  // return word.split("").map((element) => letters.indexOf(element) === -1 ? "_" : element).join(" ");

  return word
    .split('')
    .map(function (element) {
      return letters.indexOf(element) === -1 ? '_' : element;

      // It the same as above
      // if (letters.indexOf(element) === -1) {
      //     return "_";
      // } else {
      //     return element;
      // }
    })
    .join(' ');
}

function getOnlyWrongLetters(word) {
  // One liner ES5
  // return letters.filter(function (element) { return word.indexOf(element) === -1 });

  return letters.filter(function (element) {
    return word.indexOf(element) === -1;

    // It the same as above
    // if (word.indexOf(element) === -1) {
    //     return true;
    // } else {
    //     return false;
    // }
  });
}

function numberOfMissingLetters(word) {
  // One liner ES5
  // return word.split("").filter(function (element) { return letters.indexOf(element) === -1; } ).length

  var missingLetters = word.split('').filter(function (element) {
    return letters.indexOf(element) === -1;

    // It the same as above
    // if (letters.indexOf(element) === -1) {
    //     return true;
    // } else {
    //     return false;
    // }
  });

  return missingLetters.length;
}

var optionsPrompt = {
  name: 'letterOrWord',
  validator: /^[a-zA-Z]/,
  description: 'Please enter a letter or a word',
};

function displayPrompt(numberOfTriesLeft) {
  prompt.get(optionsPrompt, function (err, res) {
    // Gestion d'erreurs
    if (err) {
      console.error(err);
      return;
    }

    var inputUser = res.letterOrWord;

    if (inputUser.length === 1) {
      if (letters.indexOf(inputUser) === -1) {
        letters.push(inputUser);
      } else {
        console.log(
          "You've already tried with that letter. I'm not counting this try because I'm nice"
        );

        displayPrompt(numberOfTriesLeft);
        return;
      }

      if (numberOfMissingLetters(mysteryWord) === 0) {
        console.log(
          "You've won!! Congratulations!! The word was:",
          mysteryWord
        );
      } else {
        // pride => 5
        // si la quantité des lettres qui me manque encore est toujours 5
        // ça veut dire que j'ai pas réussi dans cet essaye à trouver une nouvelle lettre de mon mot
        // donc je reduis la quantité d'essayes de l'utilisateur
        if (numMissingLetters === numberOfMissingLetters(mysteryWord)) {
          numberOfTriesLeft--;
        }

        if (numberOfTriesLeft > 0) {
          // Set the new number of missing letters
          numMissingLetters = numberOfMissingLetters(mysteryWord);

          console.log('Your word for now is: ', getUnfinishedWord(mysteryWord));

          console.log(
            'The wrong letters you entered are:',
            getOnlyWrongLetters(mysteryWord).join(' ')
          );

          console.log(`You still have ${numberOfTriesLeft} number of tries`);

          displayPrompt(numberOfTriesLeft);
        } else {
          console.log(`You've lost :(. The word was ${mysteryWord}`);
          return;
        }
      }
    } else {
      if (inputUser == mysteryWord) {
        console.log(
          "You've won!! Congratulations!! The word was:",
          mysteryWord
        );
      } else {
        numberOfTriesLeft--;

        if (numberOfTriesLeft > 0) {
          console.log(
            `No, the word was not ${inputUser}. You still have ${numberOfTriesLeft} number of tries`
          );

          displayPrompt(numberOfTriesLeft);
        } else {
          console.log(`You've lost :(. The word was ${mysteryWord}`);
          return;
        }
      }
    }
  });
}

displayPrompt(10);
