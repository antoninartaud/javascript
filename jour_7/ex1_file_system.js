var fs = require('fs');

fs.readFile('jour07.txt', function (err, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res.toString());
});
