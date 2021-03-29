var prompt = require('prompt');

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
  switch (vehicle.direction) {
    case 'N':
      vehicle.direction = 'W';
      break;
    case 'E':
      vehicle.direction = 'S';
      break;
    case 'S':
      vehicle.direction = 'E';
      break;
    case 'W':
      vehicle.direction = 'N';
  }
  console.log('Rover turned left, new direction', rover.direction);
}

function turnRight(vehicle) {
  switch (vehicle.direction) {
    case 'N':
      vehicle.direction = 'E';
      break;
    case 'E':
      vehicle.direction = 'S';
      break;
    case 'S':
      vehicle.direction = 'W';
      break;
    case 'W':
      vehicle.direction = 'N';
  }
  console.log('Rover turned right, new direction', rover.direction);
}

function moveForward(vehicle) {
  switch (vehicle.direction) {
    case 'N':
      vehicle.position.y--;
      break;
    case 'E':
      vehicle.position.x++;
      break;
    case 'S':
      vehicle.position.y++;
      break;
    case 'W':
      vehicle.position.x--;
  }
  // console.log(
  //   `Rover Position after moveForward positionX: ${rover.position.x} positionY: ${rover.position.y}`
  // );
}

function pilotRover(strCommand) {
  savePosition();
  for (var i = 0; i < strCommand.length - 1; i++) {
    switch (strCommand.charAt(i)) {
      case 'l':
        // console.log('switch l');
        turnLeft(rover);
        break;
      case 'r':
        // console.log('switch r');
        turnRight(rover);
        break;
      case 'f':
        // console.log('switch f');
        moveForward(rover);
        break;
      default:
        console.log('Please... i want to go back to Earth');
    }
  }
  console.log(
    `rover PositionX ${rover.position.x} roverPositonY ${rover.position.y}`
  );
}

function savePosition() {
  rover.travelLog.push(rover.position);
  console.log(rover.travelLog);
}

/*Tests fonctions commandes*/

// turnRight(rover);
// turnLeft(rover);
// moveForward(rover);
pilotRover('rffrfflff');
