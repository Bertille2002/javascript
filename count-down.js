let countdownInterval;
document.querySelector('#start-timer').addEventListener('click', function() {
    const timeInput = document.querySelector('#time').value;
    let timeLeft = parseInt(timeInput, 10);
    const display = document.querySelector('#timer-display');
    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            display.textContent = `${timeLeft--} seconds remaining`;
        } else {
            clearInterval(countdownInterval);
            alert('Time is up!');
        }
    }, 1000);
});
