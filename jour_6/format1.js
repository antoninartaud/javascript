function formatDate(date) {
  var myDate = new Date(date);
  myDate = myDate.toLocaleDateString();
  console.log(myDate);
}

formatDate('2021-03-23');