var locations = ["A","B","C","D","E"];
var minCustomersPerHour = [17,6,11,20,3];
var maxCustomersPerHour = [88,24,38,48,24];
var avgCookiesSoldPerHour = [5.2,1.2,1.9,3.3,2.6];

var timeArray = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];
var customerCountPerHour = [[],[],[],[],[]];

var timeList = document.getElementById("printedTimeList");

for (var k = 0; k < locations.length; k++) {

  for (var i = 0; i < timeArray.length; i++) {
    randomCustomerGenerator(minCustomersPerHour[k],maxCustomersPerHour[k]);

    function randomCustomerGenerator (min,max) {
      var generatedCustomerCountPerHour = Math.floor((Math.random() * max) + min);
      customerCountPerHour[k].push(generatedCustomerCountPerHour);
      console.log(customerCountPerHour);
    }
  }

  for (j in timeArray) {
    var liEL = document.createElement("li");
    liEL.textContent = timeArray[j] + ": " + customerCountPerHour[k][j];
    timeList.appendChild(liEL);
  }
}
