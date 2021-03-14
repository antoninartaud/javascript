var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var words2 = [];
var count = 0;

for (let i = 0; i < words.length; i++) {
  console.log('words length:',words.length);
  console.log('words array i value:',words[i])
  console.log('words array i value et split:', words[i].split(''));
  
  words2.push(words[i].split(''));
  console.log('words2 = push words array i value et split:', words2);

  for (let j = 0; j < words2[i].length; j++) {
    // console.log('words2[i][j]:', words2[i][j]);
    // console.log('words2[i][j].length:',words2[i][j].length)

    if (words2[i][j] === 'o') {
      count++;
      console.log('Nombre provisoire de \'o\':',count);
    }
  }

}

console.log('Nombre total de \'o\' :',count);

