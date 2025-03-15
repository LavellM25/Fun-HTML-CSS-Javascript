console.log("Hello"); // JS file is rendered correctly

/** Just like other programming languages i.e. Python, and Java, JavaScript has a built Math Library.
 * The math library is built-in that provides a list of properties and methods that can do certain tasks when called upon.
 *
 * Key Features:
 * Provides mathematical constants like Math.PI
 * Supports trigonometric functions (sin, cos, tan)
 * Handles rounding and power calculations
 * Works with random number generation
 * Includes logarithmic and exponential functions
 */

// Basic Math Constants: JavaScript’s Math library provides useful mathematical constants that you can use directly.
console.log(Math.PI);        // 3.141592653589793
console.log(Math.E);         // 2.718281828459045 (Euler’s number)
console.log(Math.SQRT2);     // 1.4142135623730951 (Square root of 2)

// Commonly Used Math Methods

// 1. Rounding Methods: Rounding numbers is common in JavaScript applications.
console.log("\nThe following code is outputs referencing 1. Rounding Methods:")
console.log(Math.round(4.7));  // Output: 5 (Rounds to the nearest integer)
console.log(Math.ceil(4.1));   // Output: 5 (Rounds up to the next integer)
console.log(Math.floor(4.9));  // Output: 4 (Rounds down to the previous integer)
console.log(Math.trunc(4.9));  // Output: 4 (Removes the decimal part)

// 2. Power and Roots: You can compute powers and roots with built-in methods.
console.log("\nThe following code is outputs referencing 2. Power and Roots:")
console.log(Math.pow(2, 3));  // Output: 8 (2 to the power of 3)
console.log(Math.sqrt(16));   // Output: 4 (Square root of 16)
console.log(Math.cbrt(27));   // Output: 3 (Cube root of 27)

// 3. Trigonometry Functions: Trigonometric functions are available for calculations in radians.
console.log("\nThe following code is outputs referencing 3. Trigonometry Functions:")
console.log(Math.sin(Math.PI / 2)); // Output: 1 (Sine of 90 degrees)
console.log(Math.cos(0));           // Output: 1 (Cosine of 0 degrees)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (Tangent of 45 degrees)

// 4. Random Numbers: Generating random numbers is useful in games and simulations.
console.log("\nThe following code is outputs referencing 4. Random Numbers:")
console.log(Math.random());       // Random decimal between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);  /* Random integer between 1 and 10. Remember computers start counting from 0
The addition means that the number will start from the desire spot, in this case starting point is 1
*/

// 5. Min and Max Values: Finding the smallest and largest values in a list.
console.log("\nThe following code is outputs referencing 5. Min and Max Values:")
console.log(Math.min(5, 3, 9, 1)); // Output: 1
console.log(Math.max(5, 3, 9, 1)); // Output: 9

// Challenge: Creating a Dice Roller
// Task: Write a JavaScript function that simulates rolling a six-sided dice (values between 1 and 6) and prints the result.
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll >= 1 && roll <= 6 ? roll : rollDice(); // Ensure valid range
    /* Explanation of the logic:
    If roll is between 1 and 6, return it.
    If roll is out of range (which normally shouldn’t happen with correct logic),
    call rollDice() again recursively to retry until a valid value is returned.
     */
}
console.log("\nThe following code is outputs referencing Challenge: Creating a Dice Roller")
console.log("In the dice roller program, you rolled a: " + rollDice());

// Bonus Challenge:
// Modify the function so that it takes an argument sides, allowing rolling of dice with any number of sides.
function roll20Dice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}
console.log("\nThe following code is outputs referencing Bonus Challenge")
console.log("You rolled a: " + roll20Dice(20)); // Rolling a 20-sided dice, this line can be changed to roll any #
// from 1 through the variable side which can represent any #.

/** Conclusion:
 * The JavaScript Math library provides essential mathematical operations that help in a variety of applications.
 * Whether you are rounding numbers, calculating trigonometric values, or generating random numbers,
 * Math has you covered. Mastering these methods will make your coding more efficient and powerful!
 */