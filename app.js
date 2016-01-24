var locations = [];
var hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"];

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

Location.prototype.generatePrintedList = function () {
  var ulEl = document.createElement("ul");
  var liEl = document.createElement("li");
  liEl.className = "h1";
  liEl.textContent = this.locationName;
  printedListEl.appendChild(liEl);
  for (hour in this.hoursOpen) {
    liEl = document.createElement("li");
    liEl.textContent = this.hoursOpen[hour] + ": " + this.cookiesSoldPerHour[hour];
    ulEl.appendChild(liEl);
  }
  liEl = document.createElement("li");
  liEl.textContent = "Total: " + this.dailyCookiesSold;
  ulEl.appendChild(liEl);
  printedListEl.appendChild(ulEl);
};

var printedListEl = document.getElementById("printedList");

for (var i = 0; i < locations.length; i++) {
  locations[i].generateCookiesSoldPerHour();
  locations[i].generatePrintedList();
};
