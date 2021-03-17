// 01 - Calculator
// • Créez une fonction calculate qui recevra trois paramètres (deux nombres entiers et un opérateur +, -, x, / ou %)
// • Créez une condition (méthode au choix) pour chaque valeur possible de l'opérateur qui retournera le résultat du calcul
// • Affichez le résultat dans la console (vérifiez que pour les arguments 5, x et 4 vous obtenez bien 20)
// • Vous devrez donner les arguments dans le terminal en appelant le programme alors attention aux paramètres !
// ⇒ Si vous ne donnez pas trois arguments, le programme doit afficher "error" dans la console

console.log(process.argv);
var args = process.argv.length;
console.log(args);

var firstParameter = parseInt(process.argv[2]);
// console.log(firstParameter);
var secondParameter = process.argv[3];
// console.log(typeof secondParemeter);
// console.log(typeof undefined);

var thirdParameter = parseInt(process.argv[4]);

function calculate(firstParameter, secondParameter, thirdParameter) {
  if (args != 5) {
    console.log('Hey mon gars t\'as pas oublié un paramètre?');
  }

  if ((isNaN(firstParameter) || firstParameter === undefined) ||
    (secondParameter === undefined)||
    (isNaN(thirdParameter) || thirdParameter === undefined)) {
    console.log('Mettez tous les paramètres svp!');
    return;
  }

  if (secondParameter === '+') {
    console.log(`Le résultat de ${firstParameter} ${secondParameter} ${thirdParameter} est : ${firstParameter + thirdParameter}`);

  } else if (secondParameter === '-') {
    console.log(`Le résultat de ${firstParameter} ${secondParameter} ${thirdParameter} est : ${firstParameter - thirdParameter}`);

  } else if (secondParameter === 'x') {
    console.log(`Le résultat de ${firstParameter} ${secondParameter} ${thirdParameter} est : ${firstParameter * thirdParameter}`);

  } else if (secondParameter === '/') {
    console.log(`Le résultat de ${firstParameter} ${secondParameter} ${thirdParameter} est : ${firstParameter / thirdParameter}`);

  } else if (secondParameter === '%') {
    console.log(`Le résultat de ${firstParameter} ${secondParameter} ${thirdParameter} est : ${firstParameter % thirdParameter}`);

  } else {
    console.log('Vous devez entrer un opérateur valable !');
  }
}

calculate(firstParameter, secondParameter, thirdParameter);
