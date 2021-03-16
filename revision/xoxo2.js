// ## 02 - XOXO

// - Créez une fonction `countEach` qui reçoit une string contenant des x et des o en paramètre
// - La fonction retourne true si il y a autant de x que de o, sinon elle retourne false
// - Vérifiez que l'argument "xxxoooox" déclenche un true, et que "xox" déclenche un false


function countEach(word) {
  var countX = 0;
  var countO = 0;

  var myWord = word.split('');
  // console.log(myWord);
  for (i = 0; i < myWord.length; i++){
    if (myWord[i] === 'x') {
      // console.log(word[i]);
      countX++;
      // console.log(countX);
    } else {
      countO++;
      // console.log(countO);
    }
  }
  if (countO === countX) {
    return console.log('True');
  } else {
    return console.log('False');
  }
  
}

countEach('xxxoooxx');
console.log(typeof countEach);
var array = ['a'];
console.log(typeof array);

