const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

let current = "0";
let previous = null;
let operator = null;
let resetDisplay = false;

function updateDisplay() {
    display.value = current;
}

function inputNumber(number) {
    if (resetDisplay) {
        current = number;
        resetDisplay = false;
    } else if (current === "0") {
        current = number;
    } else if (current.length < 15) {
        current += number;
    }

    updateDisplay();
}

function inputDecimal() {
    if (resetDisplay) {
        current = "0.";
        resetDisplay = false;
    } else if (!current.includes(".")) {
        current += ".";
    }

    updateDisplay();
}

function chooseOperator(nextOperator) {
    if (operator !== null && !resetDisplay) {
        calculate();
    }

    previous = Number(current);
    operator = nextOperator;
    resetDisplay = true;
}

function calculate() {
    if (operator === null || previous === null) return;

    const a = previous;
    const b = Number(current);
    let result;

    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                current = "Tidak bisa ÷ 0";
                previous = null;
                operator = null;
                resetDisplay = true;
                updateDisplay();
                return;
            }
            result = a / b;
            break;
    }

    current = String(
        Number.isFinite(result)
            ? Number(result.toPrecision(12))
            : "Error",
    );

    previous = null;
    operator = null;
    resetDisplay = true;
    updateDisplay();
}

function clearAll() {
    current = "0";
    previous = null;
    operator = null;
    resetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (resetDisplay) return;

    current = current.length > 1 ? current.slice(0, -1) : "0";

    if (current === "-") current = "0";

    updateDisplay();
}

function changeSign() {
    if (current === "0" || current === "Error") return;

    current = String(-Number(current));
    updateDisplay();
}

function percent() {
    current = String(Number(current) / 100);
    updateDisplay();
}

buttons.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.dataset.number !== undefined) {
        inputNumber(button.dataset.number);
    } else if (button.dataset.operator) {
        chooseOperator(button.dataset.operator);
    } else {
        switch (button.dataset.action) {
            case "clear":
                clearAll();
                break;
            case "delete":
                deleteLast();
                break;
            case "decimal":
                inputDecimal();
                break;
            case "sign":
                changeSign();
                break;
            case "percent":
                percent();
                break;
            case "calculate":
                calculate();
                break;
        }
    }
});