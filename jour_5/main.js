var prompt = require(prompt);
var calculator1 = require('./calculator1');

var properties = [
  {
    name: 'num1',
  },
  {
    name: 'operator',
  },
  {
    name: 'num2'
  }
];

prompt.start();

function onErr(err) {
  console.log(err);
  return;
}

prompt.get(properties, function (err, result) {
  if (err) {
    return onErr(err);
  }

  console.log('Données reçues :');
  console.log('=> Premier Nombre : ' + result.num1);
  console.log('=> Operator : ' + result.operator);
  console.log('=> Second Nombre : ' + result.num2);
});