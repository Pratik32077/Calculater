let result = document.getElementById('result');
let expression = '';

function appendNumber(number) {
  expression += number;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = '';
  result.value = '';
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
  result.value = expression;
}

function calculateResult() {
  try {
    const evaluatedExpression = eval(expression);
    expression = evaluatedExpression.toString();
    result.value = evaluatedExpression;
  } catch (error) {
    result.value = 'Error';
  }
}
