let currentValue = '';
let currentOperator = '';
let result = 0;
let displayScreen = document.getElementById('output');

document.querySelector('.cal-body').addEventListener('click', function(event){
  if(event.target.matches('.key')){
    let buttonValue = event.target.textContent;
    if(buttonValue==='+'||buttonValue==='‒'||buttonValue==='×'||buttonValue==='÷'||buttonValue==='%'){
      operatorClicked(buttonValue);
    }
    else if(buttonValue === '='){
      calculate();
    }
    else if(buttonValue === 'AC'){
      resetValues();
    }
    else if(buttonValue ==='+/-'){
      toggleNegate();
    }
    else{
      numericKeyClicked(buttonValue);
    }
  }
} );
function numericKeyClicked(number) {
  currentValue += number;
  displayScreen.textContent = currentValue;
}
let operatorButtons = document.getElementsByClassName('operator');
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
        currentValue = (-parseFloat(currentValue)).toString();
        displayScreen.textContent = currentValue;
    }
}
