"use strict";

/**********************************************************************************
Chapter 02 - Lesson 002: Activating Strict Mode
**********************************************************************************/
let hasDriversLicense = false;
const passTest = true;

// Strict mode will log this mistake...
if (passTest) hasDriverLicense = true;

if (hasDriversLicense) console.log("I can drive!");

// Uncaught SyntaxError: Unexpected strict mode reserved word
// const interface = "Audio";

// Uncaught SyntaxError: Unexpected strict mode reserved word
// const private = 123;
