var pikePlace = {
  location: "Pike Place",
  minCustomers: 17,
  maxCustomers: 88,
  avgCookiesSold: 5.2,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
  customersPerHour: function(min,max){
    return Math.random() * (max - min) + min;
  },
  generateCookiesSoldPerHour : function() {
    for (var i = 0; i < this.hoursOpen.length; i++){
      var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
      this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
      this.dailyCookiesSold += cookiesSoldPerHourCalc;
    }
  },
  generatePrintedList: function () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    liEl.textContent = this.location;
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
  }
}

var printedListEl = document.getElementById("printedList");

pikePlace.generateCookiesSoldPerHour();
pikePlace.generatePrintedList();

var seatacAirport = {
  location: "SeaTac Airport",
  minCustomers: 6,
  maxCustomers: 24,
  avgCookiesSold: 1.2,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
  customersPerHour: function(min,max){
    return Math.random() * (max - min) + min;
  },
  generateCookiesSoldPerHour : function() {
    for (var i = 0; i < this.hoursOpen.length; i++){
      var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
      this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
      this.dailyCookiesSold += cookiesSoldPerHourCalc;
    }
  },
  generatePrintedList: function () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    liEl.textContent = this.location;
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
  }
}

var printedListEl = document.getElementById("printedList");

seatacAirport.generateCookiesSoldPerHour();
seatacAirport.generatePrintedList();

var southcenter = {
  location: "Southcenter",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesSold: 1.9,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
  customersPerHour: function(min,max){
    return Math.random() * (max - min) + min;
  },
  generateCookiesSoldPerHour : function() {
    for (var i = 0; i < this.hoursOpen.length; i++){
      var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
      this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
      this.dailyCookiesSold += cookiesSoldPerHourCalc;
    }
  },
  generatePrintedList: function () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    liEl.textContent = this.location;
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
  }
}

var printedListEl = document.getElementById("printedList");

southcenter.generateCookiesSoldPerHour();
southcenter.generatePrintedList();

var bellevueSquare = {
  location: "Bellevue Square",
  minCustomers: 20,
  maxCustomers: 48,
  avgCookiesSold: 3.3,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
  customersPerHour: function(min,max){
    return Math.random() * (max - min) + min;
  },
  generateCookiesSoldPerHour : function() {
    for (var i = 0; i < this.hoursOpen.length; i++){
      var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
      this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
      this.dailyCookiesSold += cookiesSoldPerHourCalc;
    }
  },
  generatePrintedList: function () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    liEl.textContent = this.location;
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
  }
}

var printedListEl = document.getElementById("printedList");

bellevueSquare.generateCookiesSoldPerHour();
bellevueSquare.generatePrintedList();

var alki = {
  location: "Alki",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesSold: 2.6,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
  customersPerHour: function(min,max){
    return Math.random() * (max - min) + min;
  },
  generateCookiesSoldPerHour : function() {
    for (var i = 0; i < this.hoursOpen.length; i++){
      var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
      this.cookiesSoldPerHour.push(cookiesSoldPerHourCalc);
      this.dailyCookiesSold += cookiesSoldPerHourCalc;
    }
  },
  generatePrintedList: function () {
    var ulEl = document.createElement("ul");
    var liEl = document.createElement("li");
    liEl.textContent = this.location;
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
  }
}

var printedListEl = document.getElementById("printedList");

alki.generateCookiesSoldPerHour();
alki.generatePrintedList();
