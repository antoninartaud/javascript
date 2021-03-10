for (var i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  }
  if (i % 5 === 0) {
    console.log("buzz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }
  if (i % 7 === 0) {
    console.log("");
  } else {
    console.log(i);
  }
}