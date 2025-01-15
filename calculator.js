const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');

let currentValue = '';
let operator = '';
let previousValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            currentValue = '';
            operator = '';
            previousValue = '';
            display.value = '';
        } else if (value === '=') {
            if (currentValue && previousValue && operator) {
                const result = eval(`${previousValue} ${operator} ${currentValue}`);
                display.value = result;
                previousValue = result;
                currentValue = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        } else {
            currentValue += value;
            display.value = currentValue;
        }
    });
});
