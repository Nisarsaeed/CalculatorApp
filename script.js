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
    result = parseFloat(currentValue);
    currentValue = '';
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
  currentValue = parseFloat(currentValue);
  switch (currentOperator) {
    case '+':
      result += currentValue;
      break;
    case '‒':
      result -= currentValue;
      break;
    case '×':
      result *= currentValue;
      break;
    case '÷':
      result /= currentValue;
      break;
      case '%': 
      result = (result * currentValue) / 100;
      break;
    default:
      console.log('No operator Clicked');
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
