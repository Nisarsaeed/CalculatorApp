let currentValue = '';
let currentOperator = '';
let result = 0;
let displayScreen = document.getElementById('output');
function inputNum(value) {
  currentValue += value;
  displayScreen.textContent = currentValue;
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
  displayScreen.textContent = result;
}
function reset() {
  currentValue = '';
  currentOperator = '';
  result = 0;
  Array.from(operatorButtons).forEach(button => {
    button.style.backgroundColor = '';
});
  displayScreen.textContent = result;
}
function toggleNegate() {
    if (currentValue !== '') {
        currentValue = (-parseFloat(currentValue)).toString();
        displayScreen.textContent = currentValue;
    }
}
