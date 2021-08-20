let message;
message = "Hi there!"; // store string in the variable
console.log(message);

// dynamically typed
let thing = "a thing"; // I'm a string
console.log(thing);
thing = 123; // now I'm a number
console.log(thing);

// Numbers are of type number, for both integers and floating point
let num = 321;
console.log(num, typeof(num));
num = 3.21;
console.log(num, typeof(num));

// We have inf and NaNs too
let infVar = 1 / 0;
console.log(infVar, typeof(infVar));
let nanVar = 1 / "text";
console.log(nanVar, typeof(nanVar));

// And bigInt for when we need it
const bigIntVar = 123456789098765432123456789n;
console.log(bigIntVar, typeof(bigIntVar));

// Playing with quotes and strings
let str1 = "string 1";
let str2 = 'string 2';
let str3 = `string 3 is after ${str1} and ${str2}`;
console.log(str1);
console.log(str2);
console.log(str3);

// Bools are bools
let boolVar = true;
console.log(boolVar, typeof(boolVar));
let aFalseStatement = 10 < 1;
console.log(aFalseStatement);

// Null and undefined
let nullVar = null;
console.log(nullVar, typeof(nullVar));
let undefinedVar;
console.log(undefinedVar, typeof(undefinedVar));
