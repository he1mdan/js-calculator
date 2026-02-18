const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === 'Error' || display.value === 'Infinity') {
        display.value = '';
    }
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    if (display.value === 'Error' || display.value === 'Infinity') {
        clearDisplay();
    } else {
        display.value = display.value.toString().slice(0, -1);
    }
}

function calculateResult() {
    try {
        if (display.value.includes('/0')) {
             throw new Error("DivByZero");
        }

        display.value = eval(display.value);
        
    } catch (error) {
        display.value = 'Error';
    }
}