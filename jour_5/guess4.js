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
  play();
  return;
}

function play() {
  console.log('Quel est le nombre mystère ?');
  
  if (typeof(res.play) !== number) {
    console.log('you win lucky little bastard !')
  } else {
    displayPrompt();
}


// description: "Vous aimez la pizza ? y = yes, n = no" 

function displayPrompt(){
  
  prompt.get({
    play: play()
  },
    function (err, res) {
      if (res.play === mysteryNum) {
        console.log('Well done mind master !!');
      } else if(err) {
		    return onErr(err);
      } else {
        play();
      }
    });
}
 
displayPrompt();

// console.log("Données reçues :");
  // console.log("=> Numéro proposé : " + res.userInput); // affiche le résultat pour la propriété "userInput"

