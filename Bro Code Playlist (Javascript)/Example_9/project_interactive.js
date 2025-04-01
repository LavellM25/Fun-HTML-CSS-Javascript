console.log("Hello World"); // check if JS code is rendering from the HTML file

/** This project we will learn about how to generate random numbers in Javascript
 *
 */

// Remember computers count starting at 0
let randomNumber = Math.floor(Math.random() * 5); // This will generate random #'s 0-4.
// console.log(randomNumber);


// How to generate a number between 1-100
let random = Math.floor(Math.random() * 100) + 1;
// a. the * 100 variable sets the max value
// b. the + 1 variable sets the starting point
// console.log(random); // Therefore this is going to generate a # from 1-100.

// How to generate a random number between a certain value i.e. 20 and 35
const min = 20;
const max = 35;

let betweenNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
// Step 1: subtract max value from min value since 35 -20 will be logically 15 #'s to choose from.
// Step 2: + 1 value so we are getting numbers from 20-25 not 20-34 since we are getting 20-35 inclusive
// Step 3: set a starting value of what you want to start generating #'s, which in this case is our min value (20)
// console.log(betweenNumbers); // output between 20-35


// const minimum = 70;
// const maximum = 40;
// let betweenNumbers2 = Math.floor(Math.random() * (minimum - max + 1)) + maximum;
// console.log(betweenNumbers2);

// const minimum = 40;
// const maximum = 70;
//
// // for (let i = 0; i < 10; i++) {
// //     let betweenNumbers2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// //     console.log(betweenNumbers2);
// // }


// Printing random numbers that descend, meaning each new number should be smaller than the previous one.
const count = 6; // how many numbers you want
const start = 70;
const end = 40;  // It starts with a random number between 40 and 70.

let current = Math.floor(Math.random() * (start - end + 1)) + end;
console.log(current);

for (let i = 1; i < count; i++) {
    let next = Math.floor(Math.random() * (current - end)) + end;
    console.log(next);  // Each following number is random, but always less than the one before.
    current = next; // Ensures a descending order, though with random steps.
}


console.log("----------------------------------------------"); // Line separator

// This example is the same as above however, it will print numbers from ascending order
const howMany = 10;
const lowerLimit = 40;
const upperLimit = 70;

let currentAsc = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
console.log(currentAsc);

for (let j = 1; j < howMany; j++) {
    let nextAsc = Math.floor(Math.random() * (upperLimit - currentAsc)) + currentAsc + 1;
    console.log(nextAsc);
    currentAsc = nextAsc;
}


