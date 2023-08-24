let currentValue = '';
let currentOperator = '';
let result = 0;
let displayScreen = document.getElementById('output');
let operatorButtons = document.getElementsByClassName('operator');
document.querySelector('.cal-body').addEventListener('click', function(event){
   const buttonValue = event.target.textContent;

  switch (buttonValue) {
    case '+':
    case '−':
    case '×':
    case '÷':
    case '%':
      operatorClicked(buttonValue);
      break;
    case '=':
      calculate();
      break;
    case 'AC':
      resetValues();
      break;
    case '+/-':
      toggleNegate();
      break;
    default:
      if (/^[0-9]$/.test(buttonValue)) {
        numericKeyClicked(buttonValue);
      }
  }
} );
function numericKeyClicked(number) {
  currentValue += number;
  displayScreen.textContent = currentValue;
}
function operatorClicked(operator) {
  if (currentValue !== '') {
    result = parseFloat(currentValue);
    currentValue = '';
    currentOperator = operator;   
    for (let i = 0; i < operatorButtons.length; i++) {
      if (operatorButtons[i].textContent === currentOperator ) {
        operatorButtons[i].classList.add('active-operator');
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
function resetValues() {
  currentValue = '';
  currentOperator = '';
  result = 0;
  for (let i = 0; i < operatorButtons.length; i++) { 
      operatorButtons[i].classList.remove('active-operator');
  }
  displayScreen.textContent = result;
}
function toggleNegate() {
    if (currentValue !== '') {
        currentValue = -(currentValue);
        displayScreen.textContent = currentValue;
    }
}
