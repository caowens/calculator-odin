const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  return a / b;
};


let numberA;
let operator;
let numberB;

function operate(num1, op, num2) {
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
          return "Error: invalid input for operate()";
      }
}

let displayValue = 0;

function updateDisplay(val) {
    const display = document.querySelector('#display');
    display.innerText = val;
    displayValue = val;
}

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.map((btn) => {
    btn.addEventListener('click', () => {
        updateDisplay(btn.innerText)
    })
});