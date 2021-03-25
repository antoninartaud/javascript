var request = require('request');

function catchPokemon(num) {
  var url = 'https://pokeapi.co/api/v2/pokemon/' + num;
  // url += num;
  // console.log(url);
  request.get(url, function (err, res, body) {
    var result = JSON.parse(body);
    // console.log(result);
    pokemonName = result.forms[0].name;
    console.log(`id: ${num}\nname: ${pokemonName}`);
  });
}

catchPokemon(25);
