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

function turnLeft(vehicle) {
  vehicle.direction = 'W';
}

function turnRight(vehicle) {
  vehicle.direction = 'E';
}

turnRight(rover);
// console.log(rover.direction);

function moveforward(vehicle) {
  vehicle.x++;
}

moveforward(rover);
// console.log(rover.x);

function pilotRover(command) {
  switch (command) {
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'f':
      moveforward(rover);
      break;
    default:
      console.log('Where is Earth ?');
  }
}

function savePositionLog() {
  rover.travelLog.push(`${rover.x}, ${rover.y}`);
}

pilotRover('f');

savePositionLog();

console.log('rover.direction', rover.direction);
console.log('rover.x', rover.x);
console.log('travelLog', rover.travelLog);
