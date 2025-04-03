// When first trying to solve the challenge, I realize it was overwhelming to write everything and my thoughts in one file
// So I will use this file to test certain code outcomes as a test run to how to solve questions b-d.

// b. trying to figure out a good approach to randomly remove one number from the list and replace it with ??.
let ExampleList = [12, 24, 36, 48, 60];
/*
Pick a random number from the array

Convert the whole array to a string

Replace the selected number with "??"
 */

/* Potential hints:
Use join(" ") to convert the array into a single string.

Use .toString() if working with just one number.

Use .replace(...) to substitute the number.

Be careful with numbers like 12 and 120 — replacing can accidentally match more than you want.
You might want to pad with spaces or use regex for more control.
 */

// So far I tested the code that I have successfully converted array to string and join them and replaced 12 with ??.
// let challenge = list.join(" ").toString().replace("12", "??");
// console.log(challenge);

// Get a random index from the array:
let randomIndex = Math.floor(Math.random() * ExampleList.length);

// Store the actual value at that index
let value = ExampleList[randomIndex];

// Create a copy of the list to preserve the original
let puzzleList = [...ExampleList]; // This actually copies the array

// Replace the value at that index:
puzzleList[randomIndex] = "??";

// Join and display the modified list:
let challenge = puzzleList.join(" ");
console.log(challenge);
console.log("Missing value was:", value);

