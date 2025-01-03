/**********************************************************************************************
Chapter 01 - Lesson 004: Linking a Javascript File
***********************************************************************************************/
// console.log("Is Working!!!");

/**********************************************************************************************
Chapter 01 - Lesson 005: Values and Variables
***********************************************************************************************/
/*
//Values
console.log("Gandalf");
console.log(42);
console.log(40 + 8 + 23 - 10);

//Variables
let firstName = "Frodo"; //camelCase convention
let lastName = "Baggins";

console.log(firstName);
console.log(lastName);

//Illegal Variable names
// let 3years = 3; // variables cannot start with numbers...
// let sam&rose = "SR"; // variables can only contain letters, number, underscore and dollar sign...
// let new = 27 // variables cannot use reserved words...
// let name = "Bilbo"; // name is a reserved word that are still allowed, but is not recommended to use...

//Conventions
let ringBearer = "Bilbo"; //name variables with camelCase
let PI = 3.14159265; //name constants with all upper case letters

//Name variables with descriptive names...
let myFirstJob = "Programmer"; // Better than job1
let currentJob = "Teacher"; //Better than job2
*/

/**********************************************************************************************
Chapter 01 - Lesson 007: Data Types
***********************************************************************************************/
//Number: Floating point numbers - Used for decimals and integers
let x = 9;
let y = 2.4223;
console.log(x);
console.log(y);
console.log(typeof x);

//String: Sequence of characters - Used for text;
let firstName = "Bildo";
let lastName = "Baggins";
console.log(firstName, lastName);
console.log(typeof firstName);

//Boolean: Logical type that can only be true or false - Used for taking decisions
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

//Undefined: Value taken by a variable that is not yet defined (empty value)
let isRegister = undefined;
console.log(isRegister);
console.log(typeof isRegister);

//Null: Also means 'empty value'
let userId = null;
console.log(userId);
console.log(typeof userId); //historical bug where typeof null is object

//Symbol (ES2015): Value that is unique and cannot be changed
//BigInt (ES2020): Larger integers than the Number type can hold

/*
Javascript has dynamic type: We do not have to manually define the data type of the value stored
in a variable. Instead, data types are determined automatically. Under the hood tha data type is
assign to the value and not the variable.
*/
javaScriptIsFun = 42;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);
