let currentValue = '';
let currentOperator = '';
let result = 0;

function inputNum(value) {
  currentValue += value;
  document.getElementById('output').textContent = currentValue;
}

function inputOperator(oper) {
  if (currentValue !== '') {
    calculate();
    currentOperator = oper;
  }
}

function calculate() {
  if (currentValue === '') return;
  switch (currentOperator) {
    case '+':
      result += parseFloat(currentValue);
      break;
    case '-':
      result -= parseFloat(currentValue);
      break;
    case '*':
      result *= parseFloat(currentValue);
      break;
    case '/':
      result /= parseFloat(currentValue);
      break;
      case '%': 
      result = (result * parseFloat(currentValue)) / 100;
      break;
    default:
      result = parseFloat(currentValue);
  }
  currentValue = '';
  document.getElementById('output').textContent = result;
}

function reset() {
  currentValue = '';
  currentOperator = '';
  result = 0;
  document.getElementById('output').textContent = result;
}

function toggleNegate() {
    if (currentValue !== '') {
        currentValue = (-parseFloat(currentValue)).toString();
        document.getElementById('output').textContent = currentValue;
    }
}
