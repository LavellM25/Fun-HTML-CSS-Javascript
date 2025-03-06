/**
 * In this example I will over how to read user-input.
 * By the end of this lesson, you will:
 * ✅ Understand different ways to take user input in JavaScript.
 * ✅ Learn how to read user input from the browser (prompt, forms, events).
 * ✅ Apply user input concepts in real-world applications.
 * ✅ Write small interactive programs.
 */

console.log("Hello World"); // test that the console is working fine.

let name = prompt("What is your name?");
console.log("Hello, " + name + "!");

/* How it works
prompt() displays a box asking the user to enter a value.
    The user’s input is stored in the name variable.
console.log() prints a greeting.
If user does not type anything in the prompt message box, this will return null.

This way to store user-input is used in chatbots, quick surveys/pop-ups.
 */

