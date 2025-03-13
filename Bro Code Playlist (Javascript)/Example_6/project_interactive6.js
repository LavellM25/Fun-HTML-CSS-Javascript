console.log("Hellow World"); // Test that the JS code is rendering in the console

/** In this example, I am going to go over constant variables in JavaScript
 *  Const = a variable that can't be changed. Think of this as final in Java for example.
 *  Once variable, is assigned, it cannot be later reassigned to another value.
 *  We use the const keyword to declare constants.
 */

// Basic Syntax:
const PI = 3.14159;
console.log(PI); // 3.14159

// PI = 3.14; // ❌ Error! Assignment to constant variable. This will happen if you later try to reassign this variable to a new value.

// Here are some key rules for const:

// 1. Must be initialized at the time of declaration.
// const x; // ❌ Error! Missing initializer.

// 2. Cannot be reassigned.
const age = 25;
// age = 30; // ❌ Error!

// 3. Block-scoped (like let). Constants are only accessible within the block {} where they are declared.
{
    const name = "Alice";
}
console.log(name); // ❌ Error! 'name' is not defined outside the block.

// 4. Does not make objects or arrays immutable!
// You can modify the properties of an object or elements in an array.

const person = { name: "John", age: 25 };
person.age = 26; // ✅ Allowed
console.log(person); // { name: "John", age: 26 }

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed .push() method adds 4 to the end of the list
console.log(numbers); // [1, 2, 3, 4]

/** Real-world example: Freezing a value that should not change
 * Imagine you're working on a temperature conversion program,
 * and you want to ensure that the freezing and boiling points of water remain fixed.
 */

const FREEZING_POINT_C = 0;
const BOILING_POINT_C = 100;

function checkWaterState(temp) {
    if (temp <= FREEZING_POINT_C) {
        return "Water is solid (ice).";
    } else if (temp >= BOILING_POINT_C) {
        return "Water is gas (steam).";
    } else {
        return "Water is liquid.";
    }
}

console.log(checkWaterState(50));  // Water is liquid.
console.log(checkWaterState(-10)); // Water is solid (ice).
console.log(checkWaterState(120)); // Water is gas (steam).


/*
Challenge: Write a function that takes a distance in miles and converts it to kilometers,
using a const variable to store the conversion factor (1 mile = 1.60934 km).
 */

const CONVERSION_FACTOR = 1.60934; // Define the constant conversion factor


function convertMilesToKm (miles) {
    return miles * CONVERSION_FACTOR; // Convert miles to km
}


console.log(convertMilesToKm(5)); // Should return 8.0467

// Vice versa challenge of converting Km to Miles (1 km = 0.621371 mile)

const Factor = .621371;

function convertKmtoMiles (km) {
    return km * Factor;
}
console.log(convertKmtoMiles(10));