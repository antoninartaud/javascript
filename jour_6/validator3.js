var prompt = require('prompt');

var properties = [
  {
    name: "username",
    validator: /^[a-zA-Z0-9.-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
    warning: "Le username ne doit contenir que des lettres, espaces et tirets"
  },
  {
    name: "password",
    hidden: true, // n'affichera pas la saisie de l'utilisateur à l'écran
    replace: '*',
    // pattern: /^\d{6}$/
  },
  {
    name: 'email',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }
];

prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return ;
}

prompt.get(properties, function (err, res) {
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username);
  console.log("=> Password : " + res.password);
  console.log("=> Email : " + res.email);
});