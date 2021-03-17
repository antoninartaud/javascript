var number = parseInt(process.argv[2]);

function multiply(number) {
  if (number === undefined) {
    console.log('Please give me a number');
    return;
  }
  for (var i = 1; i <= 10; i++){
    console.log(`${number} x ${i} = ${number * i}`);
  }
  console.log('\n');
}

function add(number) {
  if (number === undefined) {
    console.log('Please give me a number');
    return;
  }
  for (var i = 1; i <= 10; i++){
    console.log(`${number} + ${i} = `+ `${number + i}`);
  }
}


module.exports = { multiply, add};

// multiply(number);

// add(number);