const result = document.querySelector('#result');

document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.value;
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            result.textContent = `It's a tie! Both chose ${userChoice}.`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
        } else {
            result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
        }
    });
});
