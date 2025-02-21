document.addEventListener("DOMContentLoaded", () => {
    // Function to play a sound
    function playSound(soundFile) {
        let audio = new Audio(`sounds/${soundFile}.mp3`);
        audio.play();
    }

    // Get all buttons and add event listeners
    document.querySelectorAll(".sound-btn").forEach(button => {
        button.addEventListener("click", () => {
            let sound = button.getAttribute("data-sound");
            playSound(sound);
        });
    });
});
