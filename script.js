let displayValue = '0';
let firstOperand;
let operator;
let secondOperand;
let result;

const numButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.getElementById('display');
const allClearButton = document.querySelector('.clear');
const signButton = document.querySelector('.sign');
const percentButton = document.querySelector('.percentage');
const equalsButton = document.querySelector('.equals');

let clearDisplay = () => {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
    result = null;
}

let updateDisplay = () => {
    display.innerText = displayValue;
}

let signFunc = (num) => {
    displayValue = (num * -1).toString();
}

let percentFunc = (num) => {
    displayValue = (num/100).toString();
}

numButtons.forEach(num => {
    num.addEventListener('click', () => {
        appendNum(num.innerText);
        updateDisplay();
    })
})

let operate = (operand, firstNum, secondNum) => {
    switch (operand) {
        case '+':
            return firstNum + secondNum;
            break;
        case '-':
            return firstNum - secondNum;
            break;
        case '*':
            return firstNum * secondNum;
            break;
        case '/':
            return firstNum / secondNum;
            break;
        default:
            alert('Unidentified operator');
            break;
    }
};
