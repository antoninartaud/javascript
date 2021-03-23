var array = [1, 'toto', 34, 'javascript', 8];

// var numbers = array.filter(function (elem) {
//   if (typeof elem === 'number') {
//     return elem;
//   }
// });

// corrigé

var numbers = array.filter(function (elem) {
  var isNumber = typeof elem === 'number';
  return isNumber;
});

console.log(numbers);
