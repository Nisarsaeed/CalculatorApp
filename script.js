let currentValue = '';
let currentOperator = '';
let result = 0;
function inputNum(value) {
  currentValue += value;
  document.getElementById('output').textContent = currentValue;
}
let operatorButtons = document.getElementsByClassName('operator');
function inputOperator(oper) {
  if (currentValue !== '') {
    calculate();
    currentOperator = oper;   
    for (let i = 0; i < operatorButtons.length; i++) {
      if (operatorButtons[i].textContent === currentOperator ) {
        operatorButtons[i].style.backgroundColor = "rgb(193 112 0)";
      }
    }
  }
}
function calculate() {
  if (currentValue === '') return;
  switch (currentOperator) {
    case '+':
      result += parseFloat(currentValue);
      break;
    case '‒':
      result -= parseFloat(currentValue);
      break;
    case '×':
      result *= parseFloat(currentValue);
      break;
    case '÷':
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
  Array.from(operatorButtons).forEach(button => {
    button.style.backgroundColor = '';
});
  document.getElementById('output').textContent = result;
}
function toggleNegate() {
    if (currentValue !== '') {
        currentValue = (-parseFloat(currentValue)).toString();
        document.getElementById('output').textContent = currentValue;
    }
}
