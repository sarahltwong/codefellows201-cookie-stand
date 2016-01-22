// var PikePlace {
//   minCustomers = 17,
//   maxCustomers = 88,
//   avgCookiesSold = 5.2,
//   hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
//   cookiesSoldPerHour = [],
//   totalCookiesSold = 0,
// }
//
// var SeaTacAirport {
//   minCustomers = 6,
//   maxCustomers = 24,
//   avgCookiesSold = 1.2,
//   hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
//   cookiesSoldPerHour = [],
//   totalCookiesSold = 0,
// }
//
// var Southcenter {
//   minCustomers = 11,
//   maxCustomers = 38,
//   avgCookiesSold = 1.9,
//   hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
//   cookiesSoldPerHour = [],
//   totalCookiesSold = 0,
// }
//
// var BellevueSquare {
//   minCustomers = 20,
//   maxCustomers = 48,
//   avgCookiesSold = 3.3,
//   hoursOpen = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
//   cookiesSoldPerHour = [],
//   totalCookiesSold = 0,
// }

var Alki = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesSold: 2.6,
  hoursOpen: ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm"],
  cookiesSoldPerHour: [],
  dailyCookiesSold: 0,
}

customersPerHour: function(min,max){
  return Math.random() * (max - min) + min;
}

generateCookiesSoldPerHour : function() {
  for (var i = 0; i < hours.length; i++){
    var cookiesSoldPerHourCalc = Math.floor(this.avgCookiesSold * this.customersPerHour(this.minCustomers,this.maxCustomers));
    this.hourlyCookies.push(cookiesSoldPerHourCalc);
    this.dailyCookiesSold += cookiesSoldPerHourCalc;
  }
}

// console.log(Alki.generateCookiesSoldPerHour)
