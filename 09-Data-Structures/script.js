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

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    // ES6 Enhanced object literals (if the name is the same, we don't need to assign the value)
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
    orderPizza(mainIngredient, ...otherIngredients) {
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
// const rest1 = {
//     name: "Capri",
//     // numGuest: 20,
//     numGuest: 0,
// };

// const rest2 = {
//     name: "La Piazza",
//     owner: "Giovanni Rossi",
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;

// // OR assignment operator assign a value if the variable is falsy...
// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;

// // nullish assignment operator (null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// // rest1.owner = rest1.owner && "<ANONYMOUS>";
// // rest2.owner = rest2.owner && "<ANONYMOUS>";

// // AND assignment operator assign a value if the variable is truthy...
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

/**********************************************************************************
 * Chapter 09 - Coding Challenge #1
 **********************************************************************************/
/*
We're building a football betting app (soccer for my American friends 😅)! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
    1. Create one player array for each team (variables 'players1' and 'players2')
    2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.
    3. Create an array 'allPlayers' containing all players of both teams (22 players).
    4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
    5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
    6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
    7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

    Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored GOOD LUCK 😀
*/

// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dortmund",
//     players: [
//         [
//             "Neuer",
//             "Pavard",
//             "Martinez",
//             "Alaba",
//             "Davies",
//             "Kimmich",
//             "Goretzka",
//             "Coman",
//             "Muller",
//             "Gnarby",
//             "Lewandowski",
//         ],
//         [
//             "Burki",
//             "Schulz",
//             "Hummels",
//             "Akanji",
//             "Hakimi",
//             "Weigl",
//             "Witsel",
//             "Hazard",
//             "Brandt",
//             "Sancho",
//             "Gotze",
//         ],
//     ],
//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// //1.
// const [players1, players2] = game.players;

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

// //5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// //6.
// const printGoals = function (...players) {
//     console.log(`${players.length} goals were scored by: `);
//     for (let i = 0; i < players.length; i++) {
//         const element = players[i];
//         console.log(`\t${element}`);
//     }
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");

// //7.
// team1 < team2 && console.log("Team 1 is more likely to win");
// team2 < team1 && console.log("Team 2 is more likely to win");

/**********************************************************************************
 * Chapter 09 - Lesson 011: Looping Arrays The for-of Loop
 **********************************************************************************/
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//     console.log(item);
// }

// for (const [i, item] of menu.entries()) {
//     console.log(`${i}: ${item}`);
// }

/**********************************************************************************
 * Chapter 09 - Lesson 012: Enhanced Object Literals
 **********************************************************************************/
// console.log(restaurant);

/**********************************************************************************
 * Chapter 09 - Lesson 013: Optional Chaining
 **********************************************************************************/
// //Old way
// if (restaurant.openingHours.mon) {
//     console.log(restaurant.openingHours.mon.open);
// }

// //New way ES2020 (returns undefined)
// console.log(restaurant.openingHours.mon?.open);

// //Practice
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? "closed";
//     console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

// console.log(restaurant.orderPizza?.(0, 1) ?? "Method does not exist");

// //Arrays
// const users = [
//     { name: "Steve", email: "steve@gmail.com" },
//     { name: "Antony", email: "tony@gmail.com" },
//     { name: "Peter", email: "peter@gmail.com" },
// ];

// console.log(users[1]?.name ?? "User array empty");

/**********************************************************************************
 * Chapter 09 - Lesson 014: Looping Objects - Keys, Values and Entries
 **********************************************************************************/
// // PROPERTIES KEYS
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//     openStr += `${day}, `;
// }

// console.log(openStr);

// // PROPERTIES VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // OBJECT ENTRIES
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/**********************************************************************************
 * Chapter 09 - Lesson 015: Coding Challenge #2
 **********************************************************************************/
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
    1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski");

    2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember);

    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names;
*/

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

// Task 1:
console.log(" --------------------- Task 1 ---------------------");
for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
}

// Task 2:
console.log(" --------------------- Task 2 ---------------------");
let sum = 0;
let values = Object.values(game.odds);
for (const odd of values) {
    sum += odd;
}
console.log(sum / values.length);

// Task 3:
console.log(" --------------------- Task 3 ---------------------");
for (const odd of Object.entries(game.odds)) {
    console.log(
        game[odd[0]]
            ? `Odd of victory ${game[odd[0]]}: ${odd[1]}`
            : `Odd draw: ${odd[1]}`
    );
}
