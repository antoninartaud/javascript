var longNames = [
  {
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    firstName: 'John',
    lastName: 'Smith',
  },
];

var shortNames = longNames.map(function (elem) {
  var obj = {};
  obj.name = elem.firstName + ' ' + elem.lastName;
  return obj;
});
console.log(shortNames);
