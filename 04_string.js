const name = "Afnan Ahmad";
const numbervalue = 201155;

//console.log(name + numbervalue);

console.log(`My name is ${name} and my Rollno is ${numbervalue}`);

const countryname = new String("Pakistan");
console.log(countryname);
console.log(countryname[5]); // This is used the [5] to find index of the element

// This is used .__proto__ for object give output--->{} but this is empty and add some value can't give emty object
console.log(countryname.__proto__);
console.log(countryname.length);    // check the range of things or parhgraph
console.log(countryname.toUpperCase()); // convert to capital words
console.log(countryname.charAt(4)); // check the word position

// it used for a (start and ending point) like pakistan [index 0,p][1,a][2,k][3,i[4,s][5,t][6,a][7,n]
// print the value is [2,k][3,i][4,s]---->kis
const newslic = countryname.substring(2, 5);
console.log(newslic);

//[index 0,p][1,a][2,k][3,i[4,s][5,t][6,a][7,n]
// print the value [3,i][4,s][5,t] start index 3 endpoint is index 5
let anthorstring = countryname.slice(3, 6);
console.log(anthorstring);

let stringone = "     Afnan Ahmad";
console.log(stringone);
console.log(stringone.trim()); // trim is used for romve the starting and ending ponint extar space 

let url = "https://google.javascript%6_code .com";  // This is used for replace the anohter things like (%6 is replace to web)
console.log(url);
console.log(url.replace('%6', 'web'));
console.log(url.includes('java'));  // the things is avilible in string or sentince the give True OR False 

// This is used for a combine the string to array  
let combine = 'Afnan-Ahmad  _ Bangash_201155'
console.log(combine.split('_'));