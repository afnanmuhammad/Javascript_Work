// It is using for nodejs not browse
//alert(3+3); 
let String = "Afnan"
let age = 22
let boolean = true
let runs = 120;
let Novalue;
let id = Symbol('18377');
let anthoreid = Symbol('8459');
let empty = null;
//console.table([typeof name, age, boolean]);

//************** These are primative Data Type ******************
// that is pre difen
// Number => 2 to power 53 range
// String => "Afnan Khan"
// Boolean => True/False
// undifine => undifine
// null => object
// symbol => unique
//**************** Non-primative Data Type *****************
// Object That is used by programer
// Array
// Function


// let myArray = ['Afnan', 201155, 2.54, "Khan"];

// const obj = {
//     age:22,
//     name:"Afnan";
// }

// let myfunction = function () {
//     // console.log("Hi function");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack used for store (primitive) data & copy data 
// Heap used for stor (Non-Primitive) data & Refrence and orignal 

let mycode = "javascript"
let anthorecode = "HTML"
anthorecode = "CSS"

// console.log(mycode);
// console.log(anthorecode);

// heap 

let userone = {
    email: "afnan@gmail.com",
    fb: "Afnan Ahmad"
}

let usertow = userone
usertow.email = 'khan@gmail.com'
console.log(userone.email);
console.log(usertow.email);