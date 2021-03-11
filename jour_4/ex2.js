var cat = {
  name: 'Garfield',
  age: 3,
  isCute: true
}

var cat2 = {
  name: 'Jerry',
  age: 2,
  isCute: false
}

var cats = [cat, cat2];

console.log(cats);
console.log(cats[0]["age"]);
console.log(cats[1]["isCute"]);