/**
 * In this example I will over how to read user-input.
 * By the end of this lesson, you will:
 * ✅ Understand different ways to take user input in JavaScript.
 * ✅ Learn how to read user input from the browser (prompt, forms, events).
 * ✅ Apply user input concepts in real-world applications.
 * ✅ Write small interactive programs.
 */

console.log("Hello World"); // test that the console is working fine.

// 📌 Example 1: Getting User Input by using prompt()
// let name = prompt("What is your name?");
// console.log("Hello, " + name + "!");

/* How it works
prompt() displays a box asking the user to enter a value.
    The user’s input is stored in the name variable.
console.log() prints a greeting.
If user does not type anything in the prompt message box, this will return null.

This way to store user-input is used in chatbots, quick surveys/pop-ups.
 */

// 📌 Example 2: Getting Input from a Form using submit buttons
/** How it works:
 * The user enters their name in the input field.
 * When they click Submit, JavaScript gets the value from the input field.
 * The name is displayed in the <p> element that is called the id output.
 * The output text is changed to "Hello, + userName value + !"
 */
function greetUser() {
    let name = document.getElementById("userName").value;
    document.getElementById("output").innerText = "Hello, " + name + "!";
}

/*
You might see this code in the following examples:
Login forms.
Search bars.
Comment sections.
 */

// 📝 Lesson 3: Taking Input Using Event Listeners
// Instead of using onclick="" in HTML, we can use JavaScript to handle user input dynamically.

// Initialize count variable and set click limit
let count = 0;
const maxClicks = 10; // Change this value for a different limit

// Select button, counter display, and message area
// Define the constant variables by their id that will later be called upon in the code.
const button = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");
const counterDisplay = document.getElementById("counter");
const messageDisplay = document.getElementById("message");

// Event listener for increasing the count
button.addEventListener("click", function() {
    if (count < maxClicks) {
        count++; // Increase count
        counterDisplay.innerText = count; // Update webpage

        // Clear message when clicking below the limit
        messageDisplay.innerText = "";
    }

    // Stop counting if max limit is reached
    if (count === maxClicks) {
        messageDisplay.innerText = "You've reached the maximum count!";
    }
});

// Event listener for resetting the count
resetButton.addEventListener("click", function() {
    count = 0; // Reset count
    counterDisplay.innerText = count; // Update webpage
    messageDisplay.innerText = ""; // Clear any messages
});

/** Explaining the basic syntax of addEventListener()
 * The addEventListener() method takes two arguments:
 * // element.addEventListener(eventType, eventHandler);
 * // A string representing the event (e.g., "click", "keydown", "mouseover").
 */

