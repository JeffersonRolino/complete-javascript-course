"use strict";

/**********************************************************************************
 * Chapter 08 - Lesson 011: The this Keyword in Practice
 **********************************************************************************/
// console.log(this);

// //this Keyword in a Function
// const calcAge = function (birthYear) {
//     console.log(2025 - birthYear);
//     console.log(this);
// };

// calcAge(1988);

// //this Keyword in a Arrow Function
// const calcAgeArrow = (birthYear) => {
//     console.log(2025 - birthYear);
//     console.log(this);
// };

// calcAgeArrow(1980);

// //this Keyword in a Object
// const jonas = {
//     birthYear: 1991,
//     calcAge: function () {
//         console.log(2025 - this.birthYear);
//         console.log(this);
//     },
// };

// jonas.calcAge();

// const matilda = {
//     birthYear: 1998,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// console.log(f);

// // f();

/**********************************************************************************
 * Chapter 08 - Lesson 012: Regular Functions vs Arrow Functions
 **********************************************************************************/
var firstName = "Matilda";

const john = {
    firstName: "John",
    birthYear: 1991,
    calcAge: function () {
        console.log(2025 - this.birthYear);
        console.log(this);

        // Solution 1
        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
        // };
        // isMillenial();

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
        };
        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

john.greet();
console.log(this.birthYear);

john.calcAge();

// ARGUMENT Keyword
const addExpression = function (a, b) {
    console.log(arguments);
    return a + b;
};

addExpression(2, 5);
addExpression(7, 42, 56, 23, 2);

// Arrow function do not have the arguments object (array)
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(4, 3);
