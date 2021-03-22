var array = [1, 'toto', 34, 'javascript', 8];

var numbers = array.filter(function (elem) {
  if (typeof elem === 'number') {
    return elem;
  }
});

console.log(numbers);
