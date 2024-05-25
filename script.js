let add = (arg1, arg2) => arg1 + arg2;
let subtract = (arg1, arg2) => arg1 - arg2;
let multiply = (arg1, arg2) => arg1 * arg2;
let divide = (arg1, arg2) => arg1 / arg2;

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

let operate = (operatorArg, firstNum, secondNum) => {
    switch (operatorArg) {
        case "+":
            return(add(firstNum,secondNum));
            break;
        case "-":
            return(subtract(firstNum, secondNum));
            break;
        case "*":
            return(multiply(firstNum, secondNum));
            break;
        case "/":
            return(divide(firstNum, secondNum));
            break;
        default:
            alert("Unidentified operator");
            break;
    }
};
