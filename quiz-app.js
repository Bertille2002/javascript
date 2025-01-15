document.querySelector('#quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;
    const answers = ['A', 'B', 'C'];
    answers.forEach((answer, index) => {
        const userAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (userAnswer && userAnswer.value === answer) {
            score++;
        }
    });
    alert(`Your score is ${score} out of ${answers.length}`);
});
