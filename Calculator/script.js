// Get the display element
let display = document.getElementById('display');

// Function to add numbers and operators to display
function appendNumber(num) {
    display.value = display.value + num;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
