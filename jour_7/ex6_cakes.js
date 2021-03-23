var cakes = [
  {
    name: 'cake',
    flavor: 'vanilla',
    status: 'available',
  },
  {
    name: 'brownie',
    flavor: 'chocolate',
    status: 'available',
  },
  {
    name: 'pie',
    flavor: 'strawberry',
    status: 'available',
  },
  {
    name: 'muffin',
    flavor: 'pistachio',
    status: 'available',
  },
  {
    name: 'donut',
    flavor: 'chocolate',
    status: 'available',
  },
];

// var cakesSoldOut = cakes.map(function (elem) {
//   if (elem.flavor === 'chocolate') {
//     elem.status = 'sold out';
//   }
//   return elem;
// });

// console.log(cakesSoldOut);

// var cakesSoldOutList = cakesSoldOut.filter(function (elem) {
//   if (elem.status === 'sold out') {
//     return elem;
//   }
// });

var cakesChocolate = cakes
  .filter(function (elem) {
    return elem.flavor === 'chocolate';
  })
  .map(function (elem) {
    elem.status = 'sold out';
    return elem;
  });

console.log(cakesChocolate);
