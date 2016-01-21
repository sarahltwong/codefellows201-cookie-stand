var locations = ["A","B","C","D","E"];
var minCustomersPerHour = [17,6,11,20,3];
var maxCustomersPerHour = [88,24,38,48,24];
var avgCookiesSoldPerHour = [5.2,1.2,1.9,3.3,2.6];

var timeArray = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
var customerCountPerHour = [];

var timeList = document.getElementById("printedTimeList");

function randomCustomerGenerator (min,max) {
  var generatedCustomerCountPerHour = Math.floor((Math.random() * max) + min);
  customerCountPerHour.push(generatedCustomerCountPerHour);
  console.log(customerCountPerHour);
}

for (var i = 0; i < timeArray.length; i++) {
  randomCustomerGenerator(minCustomersPerHour[0],maxCustomersPerHour[0]);
}

for (i in timeArray) {
  var liEL = document.createElement("li");
  liEL.textContent = timeArray[i] + ": " + customerCountPerHour[i];
  timeList.appendChild(liEL);
}
