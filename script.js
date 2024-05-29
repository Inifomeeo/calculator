let previousOperand = '';
let currentOperand = '';
let operator;

const previousDisplay = document.getElementById('previous-operand');
const currentDisplay = document.getElementById('current-operand');

const buttons = document.querySelectorAll('button');

let clearDisplay = () => {
    previousOperand = '';
    currentOperand = '';
    operator = null;
}

let updateDisplay = () => {
    currentDisplay.innerText = currentOperand;
    previousDisplay.innerText = previousOperand;
}

let appendNum = (num) => {
    if(num === '.' && currentOperand.includes('.')) {return}
    currentOperand = currentOperand.toString() + num.toString();
}

let useOperator = (op) => {
    if(currentOperand === '') {return}
    if(previousOperand !== '') {
        equalsFunction();
    }
    previousOperand = currentOperand;
    currentOperand = '';
    operator = op;
}

let equalsFunction = () => {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(curr)) {return}
    
    currentOperand = operate(operator, prev, curr);
    operator = undefined;
    previousOperand = ''
}

let clickBtn = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('operand')) {
                appendNum(btn.innerText);
                updateDisplay();
            } else if(btn.classList.contains('operator')) {
                useOperator(btn.innerText);
                updateDisplay();
            } else if(btn.classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }  else if(btn.classList.contains('equals')) {
                equalsFunction();
                updateDisplay();
            }
        })
    })
}

clickBtn();

let operate = (ope, firstNum, secondNum) => {
    switch (ope) {
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
