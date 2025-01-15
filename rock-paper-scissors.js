document.querySelectorAll('.rps-button').forEach(button => {
    button.addEventListener('click', function() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const userChoice = this.textContent;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let result = '';
        if (userChoice === computerChoice) {
            result = 'It\'s a tie!';
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            result = 'You win!';
        } else {
            result = 'You lose!';
        }
        document.querySelector('#result').textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    });
});
