//++++++++++ Numbers ++++++++++++
let score = 400;
console.log(score);

const value = new Number(2005);  // output [Number: 200] Number is used for type which type ...
console.log(value);

console.log(value.toString().length);
console.log(value.toFixed(3));  // toFixed(1)-->2005.0 OR (3)-->2005.000

const othervalue = 25.9690;
console.log(othervalue.toPrecision(1));
console.log(othervalue.toPrecision(2));
console.log(othervalue.toPrecision(3));
console.log(othervalue.toPrecision(4));
console.log(othervalue.toPrecision(5));
console.log(othervalue.toPrecision(7));

const nextvalue = 2000000;
console.log(nextvalue.toLocaleString('en-pakistan'));   //('en-pakistan') print the value pak type
console.log(nextvalue.valueOf());

//******************** Maths work *************************
console.log(Math);
console.log(Math.abs(-4));  // this is used for absalote value that change the (-)value to (+)
console.log(Math.round(8.4));   //the value convert to out of the decimal number 3.5-->=3
console.log(Math.ceil(2.3));    // that select the top value 5.3--> make 6 frome 5
console.log(Math.floor(6.7));   // that opsite the ceil select the down value
console.log(Math.min(3, 6, 8, 2, 10));
console.log(Math.max(4, 7, 1, 12, 100));

console.log(Math.random()); // that alwayas give value between 0 and 1 in form of decimal number
console.log(Math.random() * 5);
console.log((Math.random() * 8) + 1);
console.log(Math.floor(Math.random() * 3) + 1);

const max = 30;
const min = 60;
console.log(Math.floor(Math.random() * (min - max + 1) + min));