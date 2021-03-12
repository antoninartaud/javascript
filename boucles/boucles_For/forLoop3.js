function rollDice(num){
  for (var i = 1; i <= num; i++){
    // var result = 0;
    var result = Math.floor(Math.random() * 6) + 1;
    if (result >= 5) {
      console.log(result);
    }
  }
}

rollDice(20);