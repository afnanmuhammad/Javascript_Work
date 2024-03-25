// Dates method it is object
const myDate = new Date()
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

// let creatDate = new Date(23, 65, 8)
// console.log(creatDate.toLocaleString());

let creatDate = new Date("2023-08-09")
console.log(creatDate.toLocaleString());

// ************ TimeStamp *****************************
// Quiz and poll desing time using
let mytimestamp = new Date()

console.log(mytimestamp);
console.log(creatDate.getTime());

console.log(Date.now() / 1000);

// I well remove the last digtes decimal number  used foolr()
console.log(Math.floor(Date.now() / 1000));

// **************Only get day or months or years print ******************************************
let newDate = new Date()
console.log(newDate);

// But you need day 
console.log(newDate.getDay());

// need month
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate() + 2);











