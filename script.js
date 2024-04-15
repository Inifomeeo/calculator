let add = (arg1, arg2) => arg1 + arg2;

let subtract = (arg1, arg2) => arg1 - arg2;

let multiply = (arg1, arg2) => arg1 * arg2;

let divide = (arg1, arg2) => arg1 / arg2;

let firstNum;
let operator;
let secondNum;

let operate = (operatorArg, numArg1, numArg2) => {
    switch (operatorArg) {
        case "+":
            return(add(numArg1,numArg2));
            break;
        case "-":
            return(subtract(numArg1, numArg2));
            break;
        case "*":
            return(multiply(numArg1, numArg2));
            break;
        case "/":
            return(divide(numArg1, numArg2));
            break;
        default:
            alert("Unidentified operator");
            break;
    }
};