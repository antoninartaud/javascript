// var month = 'September';
// var month = 'December';
// var month = 'January';
var month = 'June';

switch (month) {
  case 'January':
  case 'February':
  case 'March':
    console.log('Winter');
    break;
  case 'April':
  case 'May':
  case 'June':
    console.log('Spring');
    break;
  case 'July':
  case 'August':
  case 'September':
    console.log('Summer');
    break;
  case 'October':
  case 'November':
  case 'December':
    console.log('Fall');
    break;
  default:
    console.log("Sorry.. it's not a valid month");
}
