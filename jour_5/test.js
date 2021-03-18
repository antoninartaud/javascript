var prompt = require("prompt");

prompt.start();

function displayPrompt() {
  prompt.get({ name: "q", description: "Vous aimez la pizza ? y = yes, n = no" },
    function (err, res) { // permet de paramétrer la question

      // console.log(err);
      // console.log(res);

    if (res.q === "y" || res.q === "n") { // valide la saisie
      console.log("Bien reçu !");
    } else {
      displayPrompt(); // relance le prompt si la saisie n'est pas valide
    }
  });
}

displayPrompt(); // on n'oublie pas d'appeler la fonction ;)


// premier param de .get set key res object