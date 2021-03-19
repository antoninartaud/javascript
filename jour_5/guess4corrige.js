
var prompt = require("prompt");

var mysteryNum = Math.floor(Math.random() * 100 + 1);

// console.log("mysteryNum", mysteryNum);

function play() {

    prompt.get(

        {
            name: "numUser",
            description: "Quel est le nombre mystère ?",
            // validator: /^[1-9][0-9]?$|^100$/g // pattern regex number from 1 to 100
        },

        function (err, res) {
            // console.log(0)

            //value that the user inputs
            // console.log("res.numUser in play", res.numUser)
            
            // type of value that the user inputs
            // console.log("typeof res.numUser in play", typeof res.numUser)

            // pattern regex number from 1 to 100
            // var regex = /^[1-9][0-9]?$|^100$/g
            
            // validate if value input by the user ok from the regex expression
            // console.log("regex.test", regex.test(res.numUser));

            // console.log("res.numUser.search", res.numUser.search(/^[1-9][0-9]?$|^100$/g));
            
            //01 => position ou index de mon string
            //12 => string

            //01234567891011121314
            //Salut Franc i s c o => string

            if (res.numUser.search(/^[1-9][0-9]?$|^100$/g) === -1) {
                err = "The value is not a number between 1 and 100";
            }

            // encore une validation, si ça marche pas j'enregistre dans err le message

            if (err) {
                console.log("Error in the input: ", err);

                // console.log(1)

                play();

                return;
            }

            if (res.numUser < mysteryNum) {
                console.log("C'est plus !")
                play();
            } else if (res.numUser > mysteryNum) {
                console.log("C'est moins !")
                play();
            // } else if (res.numUser== mysteryNum) {
            } else {
                // console.log(3)

                console.log("Bravo!!!!")
            }

        }
    )

}

// prompt.start(); // démarre le prompt

play();
