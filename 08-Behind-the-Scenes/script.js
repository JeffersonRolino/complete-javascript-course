"use strict";

/**********************************************************************************
 * Chapter 08 - Lesson 011: The this Keyword in Practice
 **********************************************************************************/
console.log(this);

//this Keyword in a Function
const calcAge = function (birthYear) {
    console.log(2025 - birthYear);
    console.log(this);
};

calcAge(1988);

//this Keyword in a Arrow Function
const calcAgeArrow = (birthYear) => {
    console.log(2025 - birthYear);
    console.log(this);
};

calcAgeArrow(1980);

//this Keyword in a Object
const jonas = {
    birthYear: 1991,
    calcAge: function () {
        console.log(2025 - this.birthYear);
        console.log(this);
    },
};

jonas.calcAge();

const matilda = {
    birthYear: 1998,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
console.log(f);

// f();
