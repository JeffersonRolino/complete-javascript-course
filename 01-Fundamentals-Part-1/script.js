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
/*
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

// Javascript has dynamic type: We do not have to manually define the data type of the value stored
// in a variable. Instead, data types are determined automatically. Under the hood tha data type is
// assign to the value and not the variable.

javaScriptIsFun = 42;
console.log(typeof javaScriptIsFun);

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);
*/

/**********************************************************************************************
Chapter 01 - Lesson 008: let, const and var
***********************************************************************************************/
/*
//let allow you to change the value of the variables
//or declare a variable without initialize it.
let age;
age = 30;
age = 31;

console.log(age);

//const don't allow you to change the value (they are immutable)
//a const also don't allow you to declare a variable without initialize it

// const birthYear; // SyntaxError: Missing initializer in const declaration

const birthYear = 1991;
// birthYear = 1990; // TypeError: Assignment to constant variable.

console.log(birthYear);

//var is the old way of declaring variables
//they also allow you to change the value, but let is block scope and var is function scope
var job = "programmer";
job = "teacher";

console.log(job);

//You can declare a variable without let or var or const (NEVER DO THAT)
//But this is a terrible practice, because under the hood
//javascript will declare a field on the global scope to store the variable
lastName = "Bilbo";
console.log(lastName);
*/

/**********************************************************************************************
Chapter 01 - Lesson 009: Basic Operators
***********************************************************************************************/
// const currentYear = 2025;

// const ageBob = currentYear - 1991; // -> 34
// const ageSarah = currentYear - 1988; // -> 37

// console.log(ageBob, ageSarah);

// console.log(ageBob * 2);
// console.log(ageBob / 10);
// console.log(2 ** 3); // ** is used for exponentiation

// const firstName = "Bilbo";
// const lastName = "Baggins";
// const completeName = firstName + " " + lastName;
// console.log(completeName);

// let x = 10 + 5; // = is a assignment operator

// //Assignment operators
// x += 10; // x = x + 10 -> 25
// x -= 5; // x = x - 5 -> 20
// x *= 4; // x = x * 4 -> 80
// x /= 2; // x = x / 2 -> 40
// x++; // x = x + 1 -> 41
// x--; // x = x - 1 -> 40

// x = console.log(x);

// //Comparison operators
// console.log(ageBob > ageSarah); // -> false
// console.log(x < 10); // -> false
// console.log(ageSarah >= 18); // -> true
// console.log(ageBob <= 50); // -> true

// const isFullAge = ageSarah >= 18; // -> true
// console.log(isFullAge);

// //works thanks to the precedence order
// console.log(currentYear - 2008 >= 18); // -> false

/**********************************************************************************************
Chapter 01 - Lesson 010: Operator Precedence
***********************************************************************************************/
// const currentYear = 2025;

// const ageBob = currentYear - 1991; // -> 34
// const ageSarah = currentYear - 1988; // -> 37

// //works thanks to the precedence order
// console.log(currentYear - 2008 >= 18); // -> false

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10;
// console.log(x, y);

// const averageAge = (ageBob + ageSarah) / 2;
// console.log(ageBob, ageSarah, averageAge);

/**********************************************************************************************
Chapter 01 - Lesson 011: Coding Challenge #1
***********************************************************************************************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

TEST DATA
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
*/

// const markMass = 95;
// const markHeight = 1.88;

// markBMI = markMass / markHeight ** 2;
// console.log(markBMI);

// const johnMass = 85;
// const johnHeight = 1.76;

// johnBMI = johnMass / johnHeight ** 2;

// console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

/**********************************************************************************************
Chapter 01 - Lesson 013: Strings and Template Literals
***********************************************************************************************/
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2025;

// const tradionalConcatenation =
//   "I'am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(tradionalConcatenation);

// const templateString = `I'am ${firstName}, a ${
//   year - birthYear
// } years old ${job}!`;
// console.log(templateString);

// console.log(`Just a regular string...`);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String with
// multiple
// lines using Template Literals`);

/**********************************************************************************************
Chapter 01 - Lesson 014: Taking Decisions if else Statements
***********************************************************************************************/
// const age = 16;

// if (age >= 18) {
//   console.log("Sarah can start apply for driving license");
// } else {
//   const yearLeft = 18 - age;
//   console.log(
//     `Sarah is too young to drive. Her must wait another ${yearLeft} years.`
//   );
// }

// const birthYear = 1988;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(`James was born in the ${century} century`);

/**********************************************************************************************
Chapter 01 - Lesson 015: Coding Challenge #2
***********************************************************************************************/
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

//CASE 01
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

//CASE 02
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
// }

/**********************************************************************************************
Chapter 01 - Lesson 016: Type Conversion and Coercion
***********************************************************************************************/
//Type conversion is when we manually convert from a data type to another.
//Type coercion is when javascript converts the data type behind the scenes.

//Javascript can only convert to Number, String and Boolean

// const inputYear = "1991";
// console.log(inputYear + 18); //without conversion
// console.log(Number(inputYear) + 18); //with conversion

// console.log(Number("Jeff")); //Not a Number (invalid number)
// console.log(typeof NaN);

// console.log(String(23), 23);

// //Type coercion
// console.log("I am " + 23 + " years old"); //Javascript coerce the 23 number to a string
// console.log("23" - "10" - 3); //The minus sign coerce the strings 23 and 10 to numbers
// console.log("2" * 3); //The multiplication sign also coerce the string to a number
// console.log("9" / 3); //The division sign also coerce the string to a number
// console.log("23" + "10" + 3); //But if you use a plus sign this do not happen

// let n = "1" + 1; //string 11
// n = n - 1; //string 11 coerce to the number 11 and -1 is equal 10;
// console.log(n, typeof n);

// let x = 2 + 3 + 4 + "5"; // 95 string
// console.log(x, typeof x);

// let y = "10" - "4" - "3" - 2 + "5";
// console.log(y, typeof y);

/**********************************************************************************************
Chapter 01 - Lesson 017: Truthy and Falsy Values
***********************************************************************************************/
//Javascript has 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// //Truthy values
// console.log(Boolean({}));
// console.log(Boolean("Jeff"));

// const money = 100;

// if (money) {
//   console.log("Don't spend it all...");
// } else {
//   console.log("You should get a job!");
// }

// let height = 1.75;
// console.log(typeof height);

// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is undefined");
// }

/**********************************************************************************************
Chapter 01 - Lesson 018: Equality Operators == vs. ===
***********************************************************************************************/
// const age = 18;

// if (age == 18) {
//     console.log("You just became an adult!");
// }

// console.log("Loose comparison operator, '18' == 18: ", "18" == 18); //Loose comparison operator
// console.log("Strict comparison operator, '18' === 18: ", "18" === 18); //Strict comparison operator

// const favoriteNumber = Number(prompt("What's your favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if (favoriteNumber === 23) {
//     console.log("Cool! 23 is an amazing number!");
// } else if (favoriteNumber === 7) {
//     console.log("7 is also a cool number");
// } else if (favoriteNumber === 42) {
//     console.log("42 is my favorite number too...");
// } else {
//     console.log("I don't like your number");
// }

// if (favoriteNumber !== 23) {
//     console.log("Why not the 23?");
// }

/**********************************************************************************************
Chapter 01 - Lesson 020: Logical Operators
***********************************************************************************************/
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log("Sarah is able to drive!");
// // } else {
// //     console.log("Someone else should drive...");
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

/**********************************************************************************************
Chapter 01 - Lesson 021: Code Challenge 3
***********************************************************************************************/
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;

console.log("Dolphins score: " + scoreDolphins);
console.log("Koalas score: " + scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("The Dophins win the trophy...");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("The Koalas win the trophy...");
} else if (
    scoreDolphins === scoreKoalas &&
    scoreDolphins >= 100 &&
    scoreKoalas >= scoreKoalas
) {
    console.log("Both wins the trophy!");
} else {
    console.log("No one wins the trophy...");
}
