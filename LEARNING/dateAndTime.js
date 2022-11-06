//4 ways to create new date object

//1st way
var date1 = new Date();
console.log(date1);

//2nd way
//(year,month,day,hours,minutes,seconds,milliseconds);
var date2 = new Date(2011,12,15);
console.log(date2);

//3rd way
//(milliseconds);
var date3 = new Date(15252631562462);
console.log(date3);

//4th way
//date string

// var date4 = new Date("2018/9/5 05:14:35");
// console.log(date4);
var date4 = new Date("December 10 1993 05:14:35");
console.log(date4);

//UNIX Time
var date5 = new Date();
console.log(date5.getTime());
console.log(date5.getFullYear());
console.log(date5.getHours());
console.log(date5.getDate());
console.log(date5.getMinutes());
console.log(date5.getTimezoneOffset());
console.log(date5.getUTCDate());
console.log(date5.getUTCDay());

//Epoch time
var date6 = new Date(0);
console.log(date6);

//Modification
var date7 = new Date("december 10 1993 10:00:00");
console.log(date7.setFullYear(2021));
console.log(date7.getDay());
console.log(date7.setMinutes(10));
console.log(date7.getDay());
console.log(date7);

//calculation of time difference