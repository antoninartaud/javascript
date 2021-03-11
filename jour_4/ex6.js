function format(num) {
  var heures = Math.round(num / 3600);
  var minutes = Math.round((num % 3600) / 60);
  var secondes = (num % 3600) % 60;
  console.log('Heures: ', heures);
  console.log('Minutes: ', minutes);
  console.log('Secondes: ', secondes);
}


format(4524);