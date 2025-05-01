"use strict";

/**********************************************************************************
Chapter 02 - Lesson 002: Activating Strict Mode
**********************************************************************************/
// let hasDriversLicense = false;
// const passTest = true;

// // Strict mode will log this mistake...
// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("I can drive!");

// // Uncaught SyntaxError: Unexpected strict mode reserved word
// // const interface = "Audio";

// // Uncaught SyntaxError: Unexpected strict mode reserved word
// // const private = 123;

/**********************************************************************************
Chapter 02 - Lesson 003: Functions
**********************************************************************************/
// function logger() {
//     console.log("My name is Jeff");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// //Calling the function without store the value in a constant or variable
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

// const number = Number("23");
// console.log(number);

/**********************************************************************************
Chapter 02 - Lesson 004: Function Declarations vs Expressions
**********************************************************************************/
//Function Declaraction
//We can call the function declarations before declare it;
const age1 = calcAge1(1988);

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

console.log(age1);

//Function Expression (Produces a values) - Anonymous Function
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
};

const age2 = calcAge2(1988);
console.log(age2);
