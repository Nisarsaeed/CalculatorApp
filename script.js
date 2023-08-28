document.addEventListener('DOMContentLoaded', function () {
  (() => {
    let currentValue = '';
    let currentOperator = '';
    let result = 0;
    const displayScreen = document.getElementById('output');
    const operatorButtons = document.getElementsByClassName('yellow-box');
    const operatorButtonsArray = Array.from(operatorButtons);
    document.querySelector('.cal-body').addEventListener('click', function (event) {
      if (event.target.matches('.key')) {
        const buttonValue = event.target.textContent;

        switch (buttonValue) {
          case '+':
          case '‒':
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
            if (/^[0-9]+$/.test(buttonValue)) {
              numericKeyClicked(buttonValue);
            }
        }
      }
    });

    function numericKeyClicked(number) {
      currentValue += number;
      displayScreen.textContent = currentValue;
    }

    function operatorClicked(operator) {
      if (currentValue !== '') {
        result = parseFloat(currentValue);
        currentValue = '';
        currentOperator = operator;
        const activeOperatorButton = operatorButtonsArray.find(button => button.textContent === currentOperator);

      if (activeOperatorButton) {
          activeOperatorButton.classList.add('active-operator');
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
      operatorButtonsArray.forEach(button => {
        button.classList.remove('active-operator');
      })

      displayScreen.textContent = result;
    }

    function toggleNegate() {
      if (currentValue !== '') {
        currentValue = -(currentValue);
        displayScreen.textContent = currentValue;
      }
    }

  })();
});