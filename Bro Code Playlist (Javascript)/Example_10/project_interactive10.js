/** In this lesson we will working on the basic syntax of conditional statements in Javascript
 * if a condition is true or met, it will execute a block of code
 * if not, it will do something else
 */

// First example, if some is 18 years or older, they can vote, if not they are not eligible.

let age = 12; // age is the variable that can be change to test certain conditions

if (age >= 18) {
    console.log("You are old enough to vote");
}
else {
    console.log("You are not old enough to vote");
}

// Second Example: Working with conditional(if-else) statements with boolean variables

let isEven = false;

if (isEven) { // if true this code will execute
    console.log("This is an even number");
}
else { // if false this code will execute
    console.log("This is an odd number");
}

// Third Example: Creating nested if-statements, meaning statement inside another statement

// Say for instance you are looking for a car that is newer than 2013, with a single owner. Let's try these conditions:
let car = 2017;
let carowner1 = true;

if (car >= 2013) { // Code executes long as car is newer than 2013, carowner1 true or false won't matter.
    console.log("The car is new enough to have bluetooth carplay and backup camera.");

    if (carowner1 == true) { // Code executes if car is newer than 2013 and carowner1 is set to true.
        console.log("The car is likely to have more better maintenance and all the records kept.")
    }
    else { // Code executes if car is newer than 2013 but carowner1 is set to false.
        console.log("The previous owner likely don't have all the records kept")
    }
}
else { // Code executes if car is not greater than 2013 years old, no matter if carowner is true/false
    console.log("This a vehicle you might not want to get. ")
}

// Fourth Example: Working with if, else-if and else statements:
// For this example let's create condtions that a kid are 12 and below, teens are 13 to 17, adults are 18 and above

let number = 11;

if (number <= 12) {  // ≤ 12 → "You are a kid"
    console.log("You are a kid");
}
else if (number >= 13 && number <= 17) {  // 13–17 → "You are a teenager"
    console.log("You are a teenager");
}
else {  // ≥ 18 → "You are an adult"
    console.log("You are a adult");
}

// Fifth Example