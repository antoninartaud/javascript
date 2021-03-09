// var limit = 50;
var score = 54;
var limit = 5;
var password = 'azerty';
// var password = 'azer';

if (score >= limit && password.length > 5) {
  console.log('Everything is good!');
} else if (score >= limit || password.length > 5) {
  console.log('Something is good!');
} else {
  console.log('Nothing is good!');
}
