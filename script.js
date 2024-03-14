let numberA = null;
let operator = null;
let numberB = null;

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

function Display() {
    this.val = '';
    this.display = document.querySelector('#display');
    this.inputStack = [];
    this.updateDisplay = function(val) {
        if (this.val.length < 11) {
            this.val += val;
            this.display.innerText = this.val;
        }
    }
    this.clearDisplay = function() {
        this.val = '';
        this.display.innerText = '0';
    }
}

let display = new Display();

function operate(num1, op, num2) {
    switch (op) {
        case '+':
            display.clearDisplay();
            numberA = add(+num1, +num2);
            display.updateDisplay(numberA.toString());
            break;
        case '-':
            display.clearDisplay();
            numberA = subtract(+num1, +num2);
            display.updateDisplay(numberA);
            break;
        case 'x':
            display.clearDisplay();
            numberA = multiply(+num1, +num2);
            display.updateDisplay(numberA);
            break;
        case '/':
            display.clearDisplay();
            numberA = divide(+num1, +num2);
            display.updateDisplay(numberA);
            break;
    }
}

const numbers = Array.from(document.querySelectorAll('.operand'));
numbers.map((btn) => {
    btn.addEventListener('click', () => {
        display.updateDisplay(btn.innerText);
    });
});

const operators = Array.from(document.querySelectorAll('.operator'));
operators.map((btn) => {
    btn.addEventListener('click', () => {
        if (numberA === null) {
            numberA = display.val;
            operator = btn.innerText;
            display.inputStack.push(operator);
            display.val = '';
        }
        else if (numberB === null) {
            numberB = display.val;
            operate(numberA, operator, numberB);
            numberB = null;
            display.val = '';
            display.inputStack.pop();
        }
        else {
            operate(numberA, operator, numberB);
            numberB = null;
        }
        operator = btn.innerText;
        display.inputStack.push(operator);
    });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (numberA && !numberB && operator) {
        numberB = display.val;
        console.log(`${numberA} ${operator} ${numberB}`);
        operate(numberA, operator, numberB);
        numberB = null;
        operator = null;
        display.inputStack = [];
    }
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    display.clearDisplay();
    numberA = null;
    operator = null;
    numberB = null;
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (display.val[-1] !== '.') {
        display.updateDisplay('.');
    }
});