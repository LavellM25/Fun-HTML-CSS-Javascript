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
// console.log(current);

for (let i = 1; i < count; i++) {
    let next = Math.floor(Math.random() * (current - end)) + end;
    // console.log(next);  // Each following number is random, but always less than the one before.
    current = next; // Ensures a descending order, though with random steps.
}


console.log("----------------------------------------------"); // Line separator

// This example is the same as above however, it will print numbers from ascending order
const howMany = 10;
const lowerLimit = 40;
const upperLimit = 70;

let currentAsc = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
// console.log(currentAsc);

for (let j = 1; j < howMany; j++) {
    let nextAsc = Math.floor(Math.random() * (upperLimit - currentAsc)) + currentAsc + 1;
    // console.log(nextAsc);
    currentAsc = nextAsc;
}

/*
🔥 JavaScript Practice Challenge: “Random Number Puzzle Generator”

🧠 Goal:
Create a mini-game that generates a puzzle using random numbers.
The player must guess which of the numbers in the list is missing based on a hint.

🧩 Requirements:
a. Generate a list of 5 random numbers in ascending order, each between 50 and 100.

b. Randomly remove one number from the list and replace it with ??.

c. Display the full list with the missing value and a hint showing the number that was removed is between two values.
 */

/** Here is some pseudocode:
 * let list = [];
 * let current = someRandomValue;
 *
 * for (...) {
 *   let next = random # between current+1 and 100
 *   push next to list
 *   set current = next
 * }
 *
 * let randomIndex = random index from list
 * let value = list[randomIndex]
 * let puzzleList = copy of list
 * puzzleList[randomIndex] = "??"
 *
 * print puzzleList
 * print hint: value is between list[randomIndex - 1] and list[randomIndex + 1]
 */

// A)
// Step 1: I initialize the constant variables of having the highest number 100 and lowest 50 and count of 5 to list #'s
// randomly from 50-100 5 times.
const high = 100;
const low = 50;
const list = 5;

let Puzzlepiecelist = []; // let's create an empty list to hold the random #'s from 50-100

/** So if you look at the test.js file, from steps b-c, we need to add the random # to the list.*/



// Step 2: We are going to generate a list from 50-100 prior to doing so in the for-loop and in a particular order.
let CurrentPuzzleGenerator = Math.floor(Math.random() * (high - low + 1)) + low;
Puzzlepiecelist.push(CurrentPuzzleGenerator); // This variable will store as the starting value at which we would want to find the next # that is greater than.


// Step 3: I created a for-loop to start at index 0, go until the index is greater than the list of random #'s (in this case 5)
// Increment by 1.
for (let i = 1; i < list; i++) {
    // From the for-loop I made, I will let the next # be randomized from that starting point (with +1, so I am not starting at the same digit)
    // So for an example if the randomized choosen # from step 2 is 76, The next number list won't start from 76 it will be from 77-100
    // Last we will have the starting value as where we would like the randomized generator to start from.
    // so if 76 was chosen, the random list would be 77-100 with 76 being minimum and wanting to generate numbers from the range of 77-100.
    let NextPuzzleGenerator = Math.floor(Math.random() * (high - CurrentPuzzleGenerator + 1)) + CurrentPuzzleGenerator;
    Puzzlepiecelist.push(NextPuzzleGenerator); // Step 3a. From this point we are going to add this # to the list based on prev requirements.
    CurrentPuzzleGenerator = NextPuzzleGenerator; // Step 3b we will set the next random # as the current number and repeat this process until we are out of numbers.
}

console.log("Original list:", Puzzlepiecelist); // this is your full list

// Step B: Randomly remove one number and replace it with ??
let randomIndex = Math.floor(Math.random() * Puzzlepiecelist.length); // First the index from the array list
let missingValue = Puzzlepiecelist[randomIndex]; // Which ever you index you got, we will call this the missing value to the puzzle

// Create a copy of the list to preserve the original
let puzzleList = [...Puzzlepiecelist]; // copy original list
puzzleList[randomIndex] = "??"; // Replace the value at that index:

// Step C: Display the puzzle and hint
console.log("Puzzle list:  ", puzzleList.join(" "));

