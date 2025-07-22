"use strict";

// Data needed for a later exercise
const flights =
    "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
    "pasta",
    "gnocchi",
    "tomatoes",
    "olive oil",
    "garlic",
    "basil",
]);

const mexicanFoods = new Set([
    "tortillas",
    "beans",
    "rice",
    "tomatoes",
    "avocado",
    "garlic",
]);

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};

/**********************************************************************************
 * Chapter 09 - Lesson 003: Destructuring Arrays
 **********************************************************************************/
// const numbers = [2, 3, 4];
// const a = numbers[0];
// const b = numbers[1];
// const c = numbers[2];

// console.log(a, b, c);

// const [x, y, z] = numbers;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching Variables in the tradional way
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //Switching Variables using destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/**********************************************************************************
 * Chapter 09 - Lesson 004: Destructuring Objects
 **********************************************************************************/
// const { name, openingHours, categories } = restaurant;

// console.log(name);
// console.log(openingHours);
// console.log(categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;

// console.log(restaurantName);
// console.log(hours);
// console.log(tags);

// //Default values
// const { menu = ["Pizza", "Hamburguer", "Soup"], starterMenu: starters = [] } =
//     restaurant;

// console.log(menu);
// console.log(starters);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects

// const {
//     fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//     time: "22:30",
//     address: "Via del Sole, 21",
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({ address: "Via del Sole, 21", starterIndex: 1 });

/**********************************************************************************
 * Chapter 09 - Lesson 005: The Spread Operator
 **********************************************************************************/
/*
The JavaScript spread operator, denoted by three dots (...), is a powerful feature introduced in ES6 (ECMAScript 2015) that allows an iterable (like an array, string, or object) to be "expanded" or "spread out" into its individual elements or properties.
*/

// const numbers = [7, 8, 9];
// const badNewArray = [1, 2, numbers[0], numbers[1], numbers[2]];
// console.log(badNewArray);

// const newArray = [1, 2, ...numbers];
// console.log(newArray);

// console.log(...newArray);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //Copy Array - Shallow Copy
// const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);

// //Join 2 Arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets. NOT OBJECTS
// const string = "John Snow";
// const letters = [...string];
// console.log(letters);

// //Real-world example
// // const ingredients = [
// //     prompt("Let's make pasta! Ingredient 1?"),
// //     prompt("Let's make pasta! Ingredient 2?"),
// //     prompt("Let's make pasta! Ingredient 3?"),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedYear: 1998 };
// console.log(newRestaurant);

// //Deep Copy of Objects
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**********************************************************************************
 * Chapter 09 - Lesson 006: Rest Pattern and Parameters
 **********************************************************************************/
/*
    The Rest Operator works opposite to the Spread Operator, it allows to pack a set of
    elements... 

    Must be the last element in the array...
*/

// SPREAD, because on RIGHT side of "=" sign
// const arr = [1, 2, ...[3, 4, 5]];
// console.log(arr);

// REST, because on LEFT side of "=" sign
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) Functions
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "cheese", "spinach");
// restaurant.orderPizza("mushrooms");

/**********************************************************************************
 * Chapter 09 - Lesson 007: Short Circuiting
 **********************************************************************************/
//Boolean Operators can Use ANY data type, return ANY data type and short-circuiting;

// console.log("---------------------- OR OPERATOR ----------------------");
// console.log(3 || "Harry");
// console.log("" || "Harry");
// console.log(true || 0);
// console.log(undefined || null);

// //Return "Hello" because is the first truthy value
// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---------------------- AND OPERATOR ----------------------");
// console.log(0 && "John");
// console.log(7 && "John");

// console.log("Hello" && 23 && null && "John");

// //Checking if a property exists in a object
// if (restaurant.orderPizza) {
//     restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

/**********************************************************************************
 * Chapter 09 - Lesson 008: The Nullish Coalescing Operator()
 **********************************************************************************/
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish values: null and undefined (NOT 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

/**********************************************************************************
 * Chapter 09 - Lesson 009: Logical Assignment Operators
 **********************************************************************************/
const rest1 = {
    name: "Capri",
    // numGuest: 20,
    numGuest: 0,
};

const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
};

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// OR assignment operator assign a value if the variable is falsy...
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

// AND assignment operator assign a value if the variable is truthy...
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
