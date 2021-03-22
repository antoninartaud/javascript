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

// console.log(longNames[0].firstName);

// console.log(longNames[].firstName + ' ' + longNames.lastName);

var shortNames = longNames.map(function (elem) {
  for (i = 0; i < longNames.length; i++) {
    var obj = {};
    obj.name = elem.firstName + ' ' + elem.lastName;
    return obj;
  }
});
console.log(shortNames);
