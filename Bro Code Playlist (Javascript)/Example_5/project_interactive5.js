console.log("Hello World"); // test that the console is receiving the .JS file

/** This example we will explore type conversion.
 * Type conversion is the change of a datatype from one form to another,
 * i.e. strings, numbers, booleans, possibly being changed from numbers to strings, or vice versa.
 * This can happen implicitly (coercion) or explicitly (manual conversion).
 */

// Implicit Type Conversion (Type Coercion) Here are some examples:

// String Concatenation with Numbers
console.log("5" + 3);  // "53" (number converted to string)

// Arithmetic Operations
console.log("5" - 3);  // 2  (string converted to number)
console.log("5" * 2);  // 10 (string converted to number)

// Boolean Conversion
console.log(Boolean("Hello"));  // true
console.log(Boolean(0));        // false

// Explicit Type Conversion (Manual)

// String Conversion
let num = 42;
console.log(String(num));   // "42"
console.log(num.toString()); // "42"

// Number Conversion
let str = "123";
console.log(Number(str));   // 123
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.0

// Boolean Conversion
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false


/** Real-World Example
 * Imagine you are building a shopping cart where prices are stored as strings in a database.
 * Before performing calculations, you need to convert them to numbers.
 */
let price1 = "19.99";
let price2 = "5.50";
let total = Number(price1) + Number(price2); // This where we converted the string prices to a number to be added.

console.log("Total Price: $" + total.toFixed(2)); // "Total Price: $25.49"


// Challenge: Fix the Bug
// Hint: The output is "32", not 5. Convert the values properly before adding them.
let apples = "3";
let oranges = "2";
let totalFruits = Number(apples) + Number(oranges); // solved solution
console.log(totalFruits); // Output?
