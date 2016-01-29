var locations = [];
var hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

function Location(locationName, minCustomers, maxCustomers, avgCookiesSold) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesSold = avgCookiesSold;
  this.hoursOpen = hoursOpen;
  this.cookiesSoldPerHour = [];
  this.dailyCookiesSold = 0;

  locations.push(this);
};

var locationName = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue Square", "Alki"];
var minCustomers = [17,6,11,20,3];
var maxCustomers = [88,24,38,48,24];
var avgCookiesSold = [5.2,1.2,1.9,3.3,2.6];

for (var i = 0; i < locationName.length; i++) {
  new Location(locationName[i], minCustomers[i], maxCustomers[i], avgCookiesSold[i]);
};

Location.prototype.customersPerHour = function(min,max){
  return Math.random() * (max - min) + min;
};

Location.prototype.generateCookiesSoldPerHour = function () {
  for (var i = 0; i < this.hoursOpen.length; i++){
    var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
    this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
    this.dailyCookiesSold += cookiesSoldPerHourCalc;
  }
};

var tableEl = document.createElement("table");
var tableBody = document.createElement("tbody");
var row = document.createElement("tr");
var emptyCell = document.createElement("td");
var emptyCellText = document.createTextNode(" ");
emptyCell.appendChild(emptyCellText);
row.appendChild(emptyCell);
for (var i = 0; i < hoursOpen.length; i++) {
  var cell = document.createElement("td");
  var cellText = document.createTextNode(hoursOpen[i]);
  cell.appendChild(cellText);
  row.appendChild(cell);
  tableBody.appendChild(row);
  table.appendChild(tableBody);
};

Location.prototype.generatePrintedList = function () {
  var row2 = document.createElement("tr");
  var cell2 = document.createElement("td");
  var cellText2 = document.createTextNode(this.locationName);
  cell2.appendChild(cellText2);
  row2.appendChild(cell2);
  for (var j = 0; j < this.hoursOpen.length; j++){
    var cell3 = document.createElement("td");
    var cellText3 = document.createTextNode(this.cookiesSoldPerHour[j]);
    cell3.appendChild(cellText3);
    row2.appendChild(cell3);
  };
  tableBody.appendChild(row2);
  table.appendChild(tableBody);
}

for (var i = 0; i < locations.length; i++) {
  locations[i].generateCookiesSoldPerHour();
  locations[i].generatePrintedList();
}

var userInfo = document.getElementById("userInfo");
userInfo.addEventListener("submit",function(event) {
  event.preventDefault();
  var newLocationName = event.target.inputLocationName.value;
  var newMinCustomers = event.target.inputMinCustomers.value;
  var newMaxCustomers = event.target.inputMaxCustomers.value;
  var newAvgCookiesSold = event.target.inputAvgCookiesSold.value;
  new Location(newLocationName,parseInt(newMinCustomers),parseInt(newMaxCustomers),parseInt(newAvgCookiesSold));
  locations[locations.length-1].generateCookiesSoldPerHour();
  locations[locations.length-1].generatePrintedList();
  clearFields()
});

function clearFields () {
  event.target.inputLocationName.value = null;
  event.target.inputMinCustomers.value = null;
  event.target.inputMaxCustomers.value = null;
  event.target.inputAvgCookiesSold.value = null;
}
