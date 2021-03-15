// 01 - Alphabet
// - Créer une fonction `sortLetters` qui reçoit une string en paramètre
// - La fonction retourne une string avec les mêmes lettres, dans l'ordre alphabétique
// - Appelez votre fonction avec "konexio" comme argument et vérifiez que vous obtenez "eiknoox"
var myWord;

function sortLetters(word) {
  myWord = word.split('');
  
  myWord = myWord.reverse();

  myWord = myWord.join('');

  return myWord;
}

sortLetters('konexio');

console.log(myWord);




