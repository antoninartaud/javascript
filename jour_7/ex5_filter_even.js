var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// var even = numbers.filter(function (elem) {
//   if (elem % 2 === 0) {
//     return elem;
//   }
// });

// corrigé

var even = numbers.filter(function (elem) {
  return elem % 2 === 0;
});

console.log(even);
