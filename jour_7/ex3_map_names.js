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
  for (i = 0; i < longNames.length; i++) {
    var obj = {};
    obj.name = elem.firstName + ' ' + elem.lastName;
    return obj;
  }
});
console.log(shortNames);
