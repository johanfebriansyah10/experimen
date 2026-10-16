const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');

let current = "0";

function updateDisplay() {
    display.value = current;
}


buttons.addEventListener("click", function (event) {
    const buttonValue = event.target.closest('button');
    current = buttonValue;
    updateDisplay();
})