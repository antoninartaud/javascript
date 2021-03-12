var limit = 1000;
var nombreMultiple = 0;

for (var i = 100; i <= limit; i++){
  if (i % 7 === 0) {
    nombreMultiple++;
  } 
}
console.log(nombreMultiple);
