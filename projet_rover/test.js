var schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true,
    },
    password: {
      hidden: true,
    },
  },
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: email, password
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  name: ' + result.name);
  console.log('  password: ' + result.password);
});

// Start the prompt
prompt.start();

// Get two properties from the user: username and email
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});
