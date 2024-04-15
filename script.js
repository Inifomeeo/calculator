let add = (arg1, arg2) => arg1 + arg2;

let subtract = (arg1, arg2) => arg1 - arg2;

let multiply = (arg1, arg2) => arg1 * arg2;

let divide = (arg1, arg2) => arg1 / arg2;

let firstOperand;
let operator;
let secondOperand;

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