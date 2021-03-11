function launchDice(numberOfDice) {
  var result = 0;

  for (var i = 1; i <= numberOfDice; i++) {
    result += Math.floor(Math.random() * 6) + 1;
  }
  return result;
}

var player1 = launchDice(5);
var player2 = launchDice(5);

if (player1 > player2) {
  console.log(`Player 1 wins with: ${player1} points`);
} else if (player1 === player2) {
  console.log(`Player 1 is tied with Player 2 with: ${player1} points`);
} else {
  console.log(`Player 2 wins with: ${player2} points`);
}