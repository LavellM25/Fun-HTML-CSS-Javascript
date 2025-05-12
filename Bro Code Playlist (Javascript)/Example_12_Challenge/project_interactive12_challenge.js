/** Challenge 1: Temperature Checker
Create a program that checks the temperature and returns a message using a ternary operator. Use the following conditions:

If the temperature is 32 or lower, display "It's freezing."

If the temperature is above 32 and below 70, display "It's cool."

If the temperature is 70 or above, display "It's warm."
 */

// Temperature Checker
let temperature = 45; // Adjust this value to test different conditions

// Use a nested ternary operator to handle three possible conditions
let weatherMessage =
    // First Condition: Checks if the temperature is 32 or lower.
    temperature <= 32 ? "It's freezing" :

        // Second Condition: If the temperature is not 32 or lower, it checks if it's between 33 and 69.
        temperature < 70 ? "It's cool" :

            // Third Condition: If neither of the first two conditions is true, it assumes the temperature is 70 or higher.
            "It's warm";

// Print the result
console.log(weatherMessage);

/** Challenge 2: Voting Age Checker with Nested Ternary
 * Extend the voting age example by adding a nested ternary operator.
 * If the person is under 18, display "You can't vote yet."
 * If they are 18 to 64, display "You can vote."
 * If they are 65 or older, display "You can vote and qualify for senior benefits."
 */

// // Origin:
// let age = 17; // Use this to test certain conditions. Adjust this number to test the conditions.
// let message = age >= 18 ? "You can vote" : "You can't vote yet";

// Print this logic to the console.
// console.log(message);

let age = 0;
let voteMessage = age < 18 ? "You can't vote yet" :

    age >= 18 || age >= 65  ? "You can vote" :

        "You can vote and qualify for senior benefits."

console.log(voteMessage);