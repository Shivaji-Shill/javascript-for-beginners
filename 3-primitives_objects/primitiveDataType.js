// nn bb ss u :- This is a trick to remember primitive data types
// n = null
// n = number
// b = bigint / boolean (here boolean)
// s = string / symbol
// u = undefined

// 'a' stores a null value (intentional empty value)
let a = null;

// 'b' stores a number
let b = 345;

// 'c' stores a boolean value (true or false)
let c = true; // can also be false

// 'd' stores a BigInt value
// BigInt is used for very large numbers
let d = BigInt("555") + BigInt("5"); // result will be 560n

// 'e' stores a string (text)
let e = "Agrojit";

// 'f' stores a Symbol
// Symbol always creates a unique value
let f = Symbol("I am a very nice symbol");

// 'g' is explicitly set to undefined
let g = undefined;

// 'x' is declared but not assigned any value
// So its value is also undefined
let x;

// Print all variables to the console
console.log(a, b, c, d, e, f, g);

// Output will look like (symbol value may differ):
// null 345 true 560n "Agrojit" Symbol(...) undefined

// typeof is used to check the data type of a variable
console.log(typeof d);

// Output:
// bigint





// Objects are non-primitive data types in JavaScript
// They store data in key-value pairs

const item = {
    "Agrojit": true,     // key: "Agrojit", value: boolean
    "Dip": false,        // key: "Dip", value: boolean
    "Locky": 65,         // key: "Locky", value: number
    "Roy": undefined     // key: "Roy", value: undefined
};

// Access object values using square brackets
console.log(item["Agrojit"]); 
// Output: true

console.log(item["Dip"]);     
// Output: false


// Please use vs code for better learning and download node js for Java Script environment.