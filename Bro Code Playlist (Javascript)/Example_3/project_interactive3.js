// Arthmetic Operators

/**
 * options for Arthmetic Operators are (+ - * /)
 */

// For demonstration purposes, I am setting up an example of assigning a variable
let students = 30;
console.log(students); // print to the console

// In javascript, you do not need a semicolon (;) to terminate each line
/**
 * due to a feature called Automatic Semicolon Insertion (ASI).
 * So in this example for consistency I will continue to use a semicolon to terminate the line
 * Additionally, I just came from learning Java, so my brain still remembers to use semicolons.
 */

students = students + 1; // For addition.
console.log(students); // Output should be 31 = 30 + 1

students = students - 1; // For substraction
console.log(students); // Output will go back to 30

students = students * 2; // Multiplication
console.log(students); // Output 30 x 2 = 60

students = students / 2; // Division
console.log(students); // Output 60 / 2 = 30

// For calculating exponential values you would do the (*) the amount of times would be to that power
// Ex will raise 30 to the second power which is 30 X 30 = 900:

// students = students ** 2;
// For exponents, the ** by n which n will specify to the power at which you want to raise the variable.
students = students ** 3; // Output 27000 = 30 X 30 X 30
console.log(students);

students = students % 45 // remember this % operator gets the remainder of the variable after it has been divided.
// If there is no remainder value, this output will be 0.

console.log(students); // Since 27,000 / 45 = 600 with no remainder, the output will be 0.

/**
 * Augmented assignments:
 * - x += y  → x = x + y
 * - x -= y  → x = x - y
 * - x *= y  → x = x * y
 * - x /= y  → x = x / y
 * - x %= y  → x = x % y
 * - x **= y → x = x ** y
 */

// Let's say that the student variable will be equal to 30.

// students += 1; // Addition (students = students + 1)
// console.log(students); // Output: 31
//
// students -= 1; // Subtraction (students = students - 1)
// console.log(students); // Output: 30
//
// students *= 2; // Multiplication (students = students * 2)
// console.log(students); // Output: 60
//
// students /= 2; // Division (students = students / 2)
// console.log(students); // Output: 30
//
// // Exponentiation using ** (power operator)
// students **= 3; // 30 ** 3 = 27,000
// console.log(students); // Output: 27,000

// Additional examples for modulus
console.log(10 % 3);  // Output: 1 (10 / 3 = 3 remainder 1)
console.log(15 % 4);  // Output: 3 (15 / 4 = 3 remainder 3)
console.log(16 % 8);  // Output: 0 (16 is perfectly divisible by 8)

let count = 10;
count++; // Equivalent to count = count + 1
console.log(count); // Output: 11

count--; // Equivalent to count = count - 1
console.log(count); // Output: 10

/*
Here is an example of how to use advance operations for math
 */
console.log(Math.sqrt(25)); // Square root: Output 5
console.log(Math.pow(2, 3)); // 2^3 (same as 2 ** 3)
console.log(Math.round(4.7)); // Rounds to nearest integer: Output 5
console.log(Math.random()); // Generates a random number between 0 and 1

