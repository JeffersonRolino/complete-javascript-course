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
// //Function Declaraction
// //We can call the function declarations before declare it;
// const age1 = calcAge1(1988);

// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }

// console.log(age1);

// //Function Expression (Produces a values) - Anonymous Function
// const calcAge2 = function (birthYear) {
//     return 2025 - birthYear;
// };

// const age2 = calcAge2(1988);
// console.log(age2);

/**********************************************************************************
Chapter 02 - Lesson 005: Arrow Functions
**********************************************************************************/
// const calcAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calcAge3(1988);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years...`;
// };

// console.log(yearsUntilRetirement(1991, "John Smith"));

/**********************************************************************************
Chapter 02 - Lesson 006: Functions Calling Other Functions
**********************************************************************************/
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// const juice = fruitProcessor(2, 3);
// console.log(juice);

/**********************************************************************************
Chapter 02 - Lesson 007: Reviewing Functions
**********************************************************************************/
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement <= 0) {
//         return `${firstName} is already retired...`;
//     } else {
//         return `${firstName} retires in ${retirement} years...`;
//     }
// };

// console.log(yearsUntilRetirement(1985, "John Smith"));
// console.log(yearsUntilRetirement(1960, "Bob Brown"));

/**********************************************************************************
Chapter 02 - Lesson 008: Coding Challenge #1
**********************************************************************************/
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`The winner is Dolphins with ${avgDolphins} points!`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`The winner is Koalas with ${avgKoalas} points!`);
    } else {
        console.log(
            `Nobody won... Dophins points: ${avgDolphins} || Koalas points: ${avgKoalas}`
        );
    }
}

//Test Data
// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
