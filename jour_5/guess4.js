// ## 04 - Guess

// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var prompt = require("prompt");

var random = Math.random();
var minNombre = 1;
var maxNombre = 100;
var mysteryNum = Math.floor(random * (maxNombre - minNombre + 1)) + minNombre;

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get(["userInput", play], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Numéro proposé : " + res.userInput); // affiche le résultat pour la propriété "userInput"
});

function play() {
  console.log('Quel est le nombre mystère ?');

}