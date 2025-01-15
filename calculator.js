document.querySelectorAll('.calc-button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.querySelector('#calc-display');
        if (this.value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (this.value === 'C') {
            display.value = '';
        } else {
            display.value += this.value;
        }
    });
});
