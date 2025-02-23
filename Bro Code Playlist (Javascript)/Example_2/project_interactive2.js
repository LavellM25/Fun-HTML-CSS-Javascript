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

/*
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

/*
var (Function-scoped, old way)
var is function-scoped, meaning it is available inside the entire function where it is declared.
It can be updated and redeclared.
It does not respect block scope, which can lead to unexpected bugs.
 */

var y = 5; // Declare and assign y
console.log(y); // Output: 5

y = 15; // Reassigning is allowed
console.log(y); // Output: 15

var y = 25; // Redeclaring is also allowed
console.log(y); // Output: 25

/* 🔴 Issue with var (No block scope) */

if (true) {
    var z = 100; // Declared inside the block
}
console.log(z); // Output: 100 (Even though it's outside the block)

// Unlike let, var does not stay within the {} block.

/*
const (Constant, Cannot be changed)
const is block-scoped, like let.
It must be assigned a value when declared.
It cannot be updated or redeclared.
 */

const pi = 3.14;
console.log(pi); // Output: 3.14

// pi = 3.14159; // ❌ Error: Cannot reassign a constant variable

// const pi; // ❌ Error: Must assign a value when declared

/**
Feature	               let	        var         const
    Can be updated?	    ✅ Yes	        ✅ Yes	    ❌ No
Can be redeclared?	    ❌ No	        ✅ Yes	    ❌ No
            Scope:	    Block {}	Function	    Block {}
Must be initialized?    ❌ No	    ❌ No	        ✅ Yes

When to Use Each
✅ Use let for variables that will change (e.g., loop counters, user inputs).
✅ Use const for variables that should not change (e.g., configuration values, API URLs).
⚠️ Avoid var in modern JavaScript unless maintaining old code.
 */

// Example of Combining All Three

function example() {
    var a = "Hello"; // Function-scoped
    let b = 10;      // Block-scoped
    const c = "Fixed"; // Constant

    if (true) {
        var a = "Hi"; // This changes 'a' in the whole function
        let b = 20;   // This only changes 'b' inside the block
        // c = "New"; // ❌ Error: Cannot change constant
        console.log(a, b, c); // Output: Hi 20 Fixed
    }

    console.log(a, b, c); // Output: Hi 10 Fixed (b reverted to original)
}

example();

/* Further Explanation of var:
var is function-scoped, it means that a variable declared with var is only accessible inside the function where it was declared.
However, it does not automatically transfer between functions unless it's declared globally.
 */

// Scenario 1: var inside separate functions (No cross-function sharing)
// If var is declared inside one function, it does NOT carry over to another function.

function firstFunction() {
    var car = 5;
    console.log("Inside firstFunction:", car); // Output: 5
}

function secondFunction() {
    console.log("Inside secondFunction:", car); // ❌ Error: car is not defined
}

firstFunction();
secondFunction();

/**
 * Explanation:
 * The variable car inside firstFunction() is function-scoped, meaning it's only accessible inside that function.
 * When secondFunction() tries to access car, it results in an error because car is not defined globally.
 */

// Scenario 2: Declaring var globally (Shared across functions)
// If var is declared outside any function (global scope), it is accessible from any function.

var car = 5; // Global variable

function firstFunction() {
    console.log("Inside firstFunction:", car); // Output: 5
}

function secondFunction() {
    // car will still hold the value 5 when used in a different function the previous one.
    console.log("Inside secondFunction:", car); // Output: 5
}

function thirdFunction() {
    var car = 25;
    console.log("Inside thirdFunction:", car);
}

firstFunction();
secondFunction();
thirdFunction();
console.log("Outside functions:", car); // Output: 5 (Global `car` remains the same across functions since it is global)

