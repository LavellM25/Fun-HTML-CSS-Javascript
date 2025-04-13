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

// Fifth Example will be a project using some HTML/CSS example

// First, we connect our HTML elements to JavaScript using their ID attributes.
// This allows us to reference and interact with these elements in the script.
const myText = document.getElementById("myText");             // Refers to the input box where the user types their age
const mySubmit = document.getElementById("submit-button");    // Refers to the submit button
const result = document.getElementById("result");             // Refers to the <p> element where results will be displayed

let money; // We declare a variable named 'money' to store the user input (age)

/**
 * The program waits for the user to click the Submit button.
 * It then reads the number they typed, converts it to a number, and checks conditions using if/else.
 * Based on their age, a custom message is shown both in the console (for developers) and on the webpage (for the user).
 */

// Add an event listener to the submit button that runs this function when clicked
mySubmit.onclick = function () {

    // STEP 1: Capture the input value and convert it from a string to a number
    money = Number(myText.value); // This makes sure we are working with a number, not a string

    // STEP 2: We now evaluate the user's age using a series of if...else if...else conditions

    // Case 1: If the user is 100 or older
    if (money >= 100) {
        console.log("You are too old to visit this site.");  // This message is logged to the browser's console
        result.textContent = "You are too old to visit this site."; // This message is displayed on the web page
    }

    // Case 2: If the user entered 0 as their age
    else if (money == 0) {
        console.log("You can't enter this site, you were just born");
        result.textContent = "You can't enter this site, you were just born.";
    }

    // Case 3: If the user is between 18 and 99 (inclusive), they are allowed to enter
    else if (money >= 18) {
        console.log("Welcome! You are allowed to enter this site.");
        result.textContent = "Welcome! You are allowed to enter this site.";
    }

    // Case 4: If the user entered a negative number (not valid for age)
    else if (money < 0) {
        console.log("You have entered a number that is not valid.");
        result.textContent = "You have entered a number that is not valid.";
    }

    // Case 5: If none of the above match (e.g., age is under 18 but more than 0)
    else {
        console.log("You must be 18+ to enter this site.");
        result.textContent = "You must be 18+ to enter this site.";
    }

    // This whole function runs each time the user clicks the submit button.
    // It reads the input, evaluates it, and displays a result message based on their age.
}


