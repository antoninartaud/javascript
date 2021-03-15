// ## 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false
var myWord;

function countEach(word) {
  myWord = word.split('');
  for (i = 0; i < word.length; i++){
    if (word[i] === 'x') {
      var count = 0;
    }
  }

  
  return myWord;

}

countEach('xxxoooox');

console.log(myWord);
