var moment = require('moment');

function calculateAge(paramDate) {
  var age = moment(paramDate, 'DD-MM-YYYY').fromNow();

  console.log(`I am born ${age}`);

}

calculateAge('03-05-1965');