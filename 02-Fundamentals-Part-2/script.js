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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas * 2) {
//         console.log(`The winner is Dolphins with ${avgDolphins} points!`);
//     } else if (avgKoalas >= avgDolphins * 2) {
//         console.log(`The winner is Koalas with ${avgKoalas} points!`);
//     } else {
//         console.log(
//             `Nobody won... Dophins points: ${avgDolphins} || Koalas points: ${avgKoalas}`
//         );
//     }
// }

// //Test Data
// // checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

/**********************************************************************************
Chapter 02 - Lesson 009: Introduction to Arrays
**********************************************************************************/
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Emily";
// console.log(friends);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const years2 = [1990, 1967, 2002, 2010, 1988];
// console.log(calcAge(years2[0]));
// console.log(calcAge(years2[1]));
// console.log(calcAge(years2[years2.length - 1]));

// const ages = [
//     calcAge(years2[0]),
//     calcAge(years2[1]),
//     calcAge(years2[years2.length - 1]),
// ];

// console.log(ages);

/**********************************************************************************
Chapter 02 - Lesson 010: Basic Array Operations (Methods)
**********************************************************************************/
// const friends = ["Michael", "Steven", "Peter"];

// //Insert to the end of the array
// const newLength = friends.push("Tony");
// console.log(friends);
// console.log(newLength);

// //Insert to the begin of the array
// friends.unshift("John");
// console.log(friends);

// //Remove last element of the array
// const poppped = friends.pop();
// console.log(poppped);
// console.log(friends);

// //Remove first element of the array
// friends.shift();
// console.log(friends);

// //Find index of a element
// console.log(friends.indexOf("Steven"));

// //Return -1 for a element that is not there
// console.log(friends.indexOf("Bob"));

// //Check if a element is in the array
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// //This method uses strict validation with triple equals.
// //So the code bellow will return false.
// friends.push(23);
// console.log(friends.includes("23"));

// if (friends.includes("Peter")) {
//     console.log("You have a friend called Peter");
// }

/**********************************************************************************
Chapter 02 - Lesson 011: Coding Challenge #2
**********************************************************************************/
/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. Bonus: Create an array 'total' containing the total values, so the bill + tip.

Test data: 125, 555 and 44
*/

// const calcTip = (bill) => {
//     let tip = bill * 0.2;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     }
//     return tip;
// };

// const bills = [125, 555, 44];
// const tips = [];

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// const total = [];
// total.push(bills[0] + tips[0]);
// total.push(bills[1] + tips[1]);
// total.push(bills[2] + tips[2]);

// console.log(bills);
// console.log(tips);
// console.log(total);

/**********************************************************************************
Chapter 02 - Lesson 012: Introduction to Objects
**********************************************************************************/
// const tonyArray = [
//     "Anthony",
//     "Stark",
//     2025 - 1988,
//     "engineer",
//     ["Happy", "Steve", "Bruce", "Peter"],
// ];

// console.log(tonyArray);

// const tony = {
//     firstName: "Anthony",
//     lastName: "Stark",
//     age: 2025 - 1988,
//     job: "Enginner",
//     friends: ["Happy", "Steve", "Bruce", "Peter"],
// };

// console.log(tony);

/**********************************************************************************
Chapter 02 - Lesson 013: Dot vs. Bracket Notation
**********************************************************************************/
// console.log(tony.lastName);
// console.log(tony["lastName"]);

// const namekey = "Name";
// console.log(tony["first" + namekey]);
// console.log(tony["last" + namekey]);

// const interestIn = prompt(
//     "What do you want to know about Tony? Choose between firstName, lastName, age, job and friends."
// );

// if (tony[interestIn]) {
//     console.log(tony[interestIn]);
// } else {
//     console.log("This property does not exists...");
//     console.log("Choose between firstName, lastName, age, job and friends.");
// }

// tony.location = "Los Angeles";
// tony["twitter"] = "@ironman";
// console.log(tony);

// console.log(
//     `${tony.firstName} has ${tony.friends.length} friends, and his best friend is called ${tony.friends[0]}`
// );

/**********************************************************************************
Chapter 02 - Lesson 014: Object Methods
**********************************************************************************/
// const tony = {
//     firstName: "Anthony",
//     lastName: "Stark",
//     birthYear: 1988,
//     job: "Enginner",
//     friends: ["Happy", "Steve", "Bruce", "Peter"],
//     hasDriversLicense: true,
//     // calcAge: function (birthYear) {
//     //     return 2025 - birthYear;
//     // },
//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2025 - this.birthYear;
//     // },
//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },
//     // prettier-ignore
//     sumary: function () {
//         return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//     },
// };

// // console.log(tony.calcAge(1970));
// // console.log(tony["calcAge"](1970));

// console.log(tony.calcAge());
// console.log(tony);

// //Challenge
// // "Jonas is a 46 years old teacher, and he has a driver's license."

// console.log(tony.sumary());

/**********************************************************************************
Chapter 02 - Lesson 015: Coding Challenge #3
**********************************************************************************/
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith);
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method;
    3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
    
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

// const mark = {
//     name: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };

// mark.calcBMI();
// console.log(mark.BMI);

// const john = {
//     name: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2;
//         return this.BMI;
//     },
// };

// john.calcBMI();
// console.log(john.BMI);

// const printHighestBMI = function (person1, person2) {
//     if (person1.calcBMI() > person2.calcBMI()) {
//         return `${person1.name}'s BMI (${person1.BMI}) is higher than ${person2.name}'s BMI (${person2.BMI})`;
//     } else {
//         return `${person2.name}'s BMI (${person2.BMI}) is higher than ${person1.name}'s BMI (${person1.BMI})`;
//     }
// };

// console.log(printHighestBMI(mark, john));

/**********************************************************************************
Chapter 02 - Lesson 016: Iterations - The for loop
**********************************************************************************/
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");

// // for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/**********************************************************************************
Chapter 02 - Lesson 017: Looping Arrays, Breaking and Continuing
**********************************************************************************/
// const tony = [
//     "Anthony",
//     "Stark",
//     2025 - 1988,
//     "engineer",
//     ["Happy", "Steve", "Bruce", "Peter"],
//     true,
// ];

// const types = [];

// for (let i = 0; i < tony.length; i++) {
//     // console.log(tony[i], typeof tony[i]);
//     // types[i] = typeof tony[i];
//     types.push(typeof tony[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     const year = years[i];
//     ages.push(2025 - year);
// }

// console.log(ages);

//Continue and break
// console.log("PRINT ONLY STRINGS");
// for (let i = 0; i < tony.length; i++) {
//     if (typeof tony[i] !== "string") continue;
//     //continue will exit this iteration and not print this line
//     //when the element is not a string
//     console.log(tony[i], typeof tony[i]);
// }

// console.log("-----------------------------------------------------");

// console.log("BREAK WHEN FIND A NUMBER...");
// for (let i = 0; i < tony.length; i++) {
//     if (typeof tony[i] === "number") break;
//     //break will exit the loop when the element is a number
//     console.log(tony[i], typeof tony[i]);
// }

/**********************************************************************************
Chapter 02 - Lesson 018: Looping Backwards and Loops in Loops
**********************************************************************************/
// const tony = [
//     "Anthony",
//     "Stark",
//     2025 - 1988,
//     "engineer",
//     ["Happy", "Steve", "Bruce", "Peter"],
// ];

// for (let i = tony.length; i > 0; i--) {
//     console.log(tony[i]);
// }

// for (let i = 0; i < 4; i++) {
//     console.log(`Outter Loop ${i}`);
//     for (let j = 0; j < 6; j++) {
//         console.log(`\tInner Loop ${j}`);
//     }
// }

/**********************************************************************************
Chapter 02 - Lesson 019: The While loop
**********************************************************************************/
// let counter = 0;
// while (counter < 10) {
//     console.log(`While loop: ${counter}`);
//     counter++;
// }

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6 + 1);
    if (dice === 6) {
        console.log("You rolled a 6");
    }
}
