console.log("Hello World Project"); // Test that the JS code is working

// First I will start will making my decrease, increase and reset buttons as constant variables

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0; // Let's initialize the counter to be zero

// This function allows when the user clicks the increase button, increase the counter each time.
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

// This function allows when the user clicks the decrease button, decrease the counter each time.
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

// When a user clicks on this function it will automatically reset counter to 0.
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}