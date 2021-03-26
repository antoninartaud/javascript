// Modules
// var prompt = require('prompt');

// Déclarations variables
var grid = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};

// Déclarations fonctions
function turnLeft(vehicle) {
  vehicle.direction = 'W';
}

function turnRight(vehicle) {
  vehicle.direction = 'E';
}

function moveforward(vehicle) {
  console.log('before if moveforward');
  if (vehicle.direction === 'E') {
    console.log('moveforwardE');
  } else if (vehicle.direction === 'W') {
    vehicle.y = vehicle.y + 1;
  }
}

function pilotRover(command) {
  switch (command) {
    case 'l':
      console.log('switch l');

      turnLeft(rover);
      break;
    case 'r':
      console.log('switch r');
      turnRight(rover);
      break;
    case 'f':
      console.log('switch f');

      moveforward(rover);
      break;
    default:
      console.log('Please... i want to go back to Earth');
  }
}

function savePositionLog() {
  rover.travelLog.push(`${rover.x}, ${rover.y}`);
  // rover.travelLog = [];
}

// Tests fonctions commandes
// turnRight(rover);
// moveforward(rover);
pilotRover('f');

savePositionLog();

console.log('rover.direction', rover.direction);
console.log('travelLog', rover.travelLog);
console.log('rover.x', rover.x);
console.log('rover.y', rover.y);

// prompt.start();

// // Get two properties from the user: username and email
// prompt.get(['username', 'email'], function (err, result) {
//   //
//   // Log the results.
//   //
//   console.log('Command-line input received:');
//   console.log('  username: ' + result.username);
//   console.log('  email: ' + result.email);
// });
