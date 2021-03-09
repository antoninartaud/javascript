// 01 - Hello World

console.log('Hello world');

// 02 - String

var test = 'My name is Francisco';
console.log(test);

// 03 - Concatenation

var name = 'Francisco';
console.log('Nice to meet you ' + name);

// 04 - String Length

var testLength = "I'm very long";
console.log(testLength.length);

// 05 - Replace

var food = 'croissant is meh';
food = food.replace('meh', 'so good');
console.log(food);

// 06 - Up and Down

var basic = 'This is cool';
basicUp = basic.toUpperCase();
basicDown = basicUp.toLowerCase();
console.log(`${basic}\n${basicUp}\n${basicDown}`);

// 07 - Split

var word = 'banana';
var letters = word.split('');
console.log(letters);

// 08 - Template

var age = 55;
console.log(`I'm ${age} years old`);

// MDN
var animalInitial = 'cat'.charAt(1); // returns "a"
console.log(animalInitial);

var animalInitial1 = 'cat'[1]; // returns "a"
console.log(animalInitial1);

let longString =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
console.log(longString);

var changed = 'Bonjour';
changed = changed.replace(/o/g, 'a');

console.log(changed);
