let displayValue;
let firstOperand;
let operator;
let secondOperand;
let result;

const numButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
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

let signFunc = (num) => {
    displayValue = (num * -1).toString();
}

let percentFunc = (num) => {
    displayValue = (num/100).toString();
}

let operate = (op, firstNum, secondNum) => {
    switch (op) {
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
