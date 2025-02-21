// This is a one line comment, Date: 2-19-2025

/**
 * This is a docstring comment
 */

/*
This is a multiline comment
Where you can write developer ideas that will not get executed
Javascript similar to java uses a semicolon to execute a line (;)
To print to the console type console.log()
 */

console.log("Hello World");  // ex printing things to the console. Can be viewable by right click, inspect, the click console
console.log(`Hello Earth`); // will also print to the console. Remember this is printing a literal string not a variable.

//window.alert("Example");  // Example of how to print text to the window that will bring an alert menu w/ text.


// This will get element by ID that is specified in the HTML (project1.html) and change the header (pilot) to Welcome
document.getElementById("header").textContent = "Welcome";

// This will do the same thing as above example except change header text color to orange
document.getElementById("header").style.color = "orange";

// This will do the same thing as above example except change header background color to blue
document.getElementById("header").style.backgroundColor = "blue";


// Now for the next following examples, I am going to get element by ID and change the paragraph content

// In this example I will change the paragraph content color to black.
document.getElementById("paragraph").style.color = "black";

// In this example I will change the paragraph content background-color to green.
document.getElementById("paragraph").style.backgroundColor = "green";