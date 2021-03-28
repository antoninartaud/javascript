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
  position: {
    x: 0,
    y: 0,
  },
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
  console.log('vehicle', vehicle);
  if (vehicle.direction === 'E') {
    vehicle.position.x++;
    console.log('vehicle.position.x', vehicle.position.x);
  } else if (vehicle.direction === 'W') {
    vehicle.position.y++;
  }
}

function pilotRover(command) {
  savePositionLog();
  console.log(rover.travelLog);
  command = command.split('');
  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
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
}

function savePositionLog() {
  rover.travelLog.push(`${rover.position.x},${rover.position.y}`);
}

// Tests fonctions commandes
// turnRight(rover);
// moveforward(rover);

pilotRover('rf');

// var positionX = rover.position.x + 1;

// console.log(positionX);

console.log('rover.direction', rover.direction);
console.log('travelLog', rover.travelLog);
console.log('rover.Postionx', rover.position.x);
console.log('rover.y', rover.position.y);

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
