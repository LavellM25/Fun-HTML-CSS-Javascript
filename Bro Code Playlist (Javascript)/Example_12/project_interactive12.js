console.log("Hello World") // Check if the js code is rendering correct.

/** Ternary Operator: This is a logic shortcut to using if and else statements.
 *                    This helps assign a variable to a certain condition based on if a block of code is true or false.
 *                    Example: condition ? codeIfTrue : codeIfFalse
 */

// Example 1: If age condition is greater than or equal to 18, you can vote, otherwise you can't vote.

let age = 17; // Use this to test certain conditions. Adjust this number to test the conditions.
let message = age >= 18 ? "You can vote" : "You can't vote yet";

// Print this logic to the console.
console.log(message);

/* Now if we were to write if and else statements it would be like the following:
if(age >= 18) {
    message = "You can vote";
}
else {
    message = "You can't vote yet"
}

No notice how we can get the same solution with fewer lines of code.
 */

// Example 2: If the time is greater than 12 it will be afternoon, otherwise it will be morning.

let time = 13;  // Use this to test certain conditions. Adjust this number to test the conditions.
let greeting = time > 12 ? "Good afternoon" : "Good morning";

// Print this logic to the console.
console.log(greeting);

/* Now in this second example you can see how using the ternary operator is more efficient than writing this statement:
if(time > 12) {
    message = "Good afternoon";
}
else {
    message = "Good morning";
}
 */

// Example 3: It even works with using boolean statements.
//            In this example, I will use a boolean statement to show how ternary operator works.

/* In this logic, we are going to have a boolean statement and set condition accordingly:
   If isMale is set to true, code "You are male" will execute.
   If isMale is set to false, code "You are a female" will execute.
 */

let isMale = true;
let gender = isMale ? "You are a male" : "You are a female";
console.log(gender);

