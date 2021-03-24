var request = require('request');

var countriesNames = [];

function getCountries() {
  request.get(
    'https://restcountries.eu/rest/v1/all',
    function (err, res, body) {
      var result = JSON.parse(body);

      // for (var i = 0; i < result.length; i++) {
      //   countriesNames.push(result[i].name);
      // }
      countriesNames = result.map(function (elem) {
        return elem.name;
      });
      console.log(typeof countriesNames);

      countriesNames = JSON.stringify(countriesNames);
      console.log(typeof countriesNames);
      // countriesNames.join('-');
      countriesNames = countriesNames.replace(/"+/g, '');
      countriesNames = countriesNames.replace(/,/g, '-');
      countriesNames = countriesNames.replace(/[]/g, '');
      console.log(countriesNames);
    }
  );
}

getCountries();
