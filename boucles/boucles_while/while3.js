var ussainBolt = 0;
var tysonGay = 0;

while (ussainBolt <= 100 && tysonGay <= 100) {
  var numTop = 10;
  var numBottom = 1;
  ussainBolt += Math.floor(Math.random() * (numTop - numBottom + 1)) + numBottom;
  tysonGay += Math.floor(Math.random() * (numTop - numBottom + 1)) + numBottom;
}

if (ussainBolt > tysonGay) {
  console.log('The winner is: Ussain Bolt');
  console.log(`Usain score: ${ussainBolt}`);
  console.log(`Tyson score: ${tysonGay}`);

} else if (ussainBolt < tysonGay) {
  console.log('The winner is: Tyson Gay');
  console.log(`Usain score: ${ussainBolt}`);
  console.log(`Tyson score: ${tysonGay}`);

} else {
  console.log('The runners tied');
}