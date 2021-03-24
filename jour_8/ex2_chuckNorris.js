var request = require('request');

function getFact() {
  request.get(
    'https://api.chucknorris.io/jokes/random',
    function (err, res, body) {
      var result = JSON.parse(body);
      console.log(result.value);
    }
  );
}

getFact();
