var limit = 100;

for (var i = 0; i <= limit; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz");
  }
  else if (i % 5 === 0) {
    console.log("buzz");
  }
  else if  (i % 3 === 0) {
    console.log("fizz");
  }
  else if (i % 7 === 0) {
    console.log("");
  } else {
    console.log('value of i', i);
  }
}