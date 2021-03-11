function format(num) {
  var heures = Math.floor(num / 3600);
  var minutes = Math.floor((num % 3600) / 60);
  var secondes = (num % 3600) % 60;
  console.log(`${heures}:${minutes}:${secondes}`);
}


format(4524);