// Conversion Data Types to Number , Boolean and String....

// String convert to Number------------>
let score = "201155";
// console.log(score);
// console.log(typeof (score));
// The String  convert to Number
let valueInNumber = Number(score);
// console.log(typeof (valueInNumber));

//###########  Notes  ##############
// String to convert to Number Throug-----> (let valueInNumber = Number(score);)
// string "201155" convert to number = 201155 /Output
// string "201155ABC" is not convert to number = NAN ---> Not a Number /output
// "Afnan" True = 1 /output // " " Empty Box that give  False = 0 /output



//*************** Boolean convert to True = 1 or False 0; ***********************
let isloggedIn = 1;
// console.log(isloggedIn);
let booleanisloggedIn = Boolean(isloggedIn)
// console.log(booleanisloggedIn);
// console.log(typeof (booleanisloggedIn));

//#########  Notes  ############## 
// Boolean to convert to True or False Throug-----> (let booleanisloggedIn = Boolean(isloggedIn))
// 1 is enter that give true output
// o is also give false
// " " or ' ' is will be conseder Empty ---> false
// "Afnan" is will be remain a true




//*****************Number convert to string**********************
let someNumber = 201155;
console.log(someNumber);
console.log(typeof (someNumber));

let stringNumber = String(someNumber);
console.log(typeof (stringNumber));

// Numbers to convert to string Throug-----> (let stringNumber = String(someNumber);)