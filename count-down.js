let timerInterval;
let countdownTime = 0;

const timerDisplay = document.getElementById("timer");
const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startBtn");
const resetButton = document.getElementById("resetBtn");

// Update the countdown display
function updateTimerDisplay() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Format time to always show two digits (e.g., 01, 02, ..., 09)
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Start the countdown
function startCountdown() {
    countdownTime = parseInt(timeInput.value);

    if (isNaN(countdownTime) || countdownTime <= 0) {
        alert("Please enter a valid number greater than 0");
        return;
    }

    startButton.disabled = true;
    resetButton.disabled = false;
    
    timerInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(timerInterval);
            startButton.disabled = false;
            alert("Time's up!");
        } else {
            countdownTime--;
            updateTimerDisplay();
        }
    }, 1000);
}

// Reset the countdown
function resetCountdown() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    resetButton.disabled = true;
    countdownTime = 0;
    timeInput.value = "";
    updateTimerDisplay();
}

// Event listeners for buttons
startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);

// Initialize the timer display
updateTimerDisplay();
