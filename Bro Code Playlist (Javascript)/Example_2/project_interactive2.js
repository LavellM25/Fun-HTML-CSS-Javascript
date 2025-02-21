/**
 * Date: 2-19-2025
 *
 * In this example I will be working on variables and basics of assignments of data types
 * declaration example let x; meaning I am going to declare this variable w/o assigning a variable
 * assignment example x = 100; meaning the variable x will hold the value of 100 which is it's assignment
 *
 */

// In javascript typically to assign variables you can assign them by using "let".
// assign variables using const will be its final value and cannot be changed later in the program.
// Think of it like final in java.

/*



In JavaScript, let, var, and const are all used to declare variables, but they have different behaviors.
Here’s a simple breakdown with examples:
 */

/**
 * let (Block-scoped)
 * let is the modern way to declare variables.
 * It can be updated but cannot be redeclared within the same scope.
 * It is block-scoped, meaning it is only available inside the {} block where it is defined.
 * Example:
 */

let x = 10; // Declare and assign x
console.log(x); // Output: 10

x = 20; // Reassigning is allowed
console.log(x); // Output: 20

// But redeclaring in the same scope is NOT allowed
// let x = 30; // ❌ Error

