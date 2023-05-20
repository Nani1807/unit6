function mathOperation(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      result = "Невідомий оператор";
  }

  return result;
}

const a = 5;
const b = 3;
const operator = '+';
const result = mathOperation(a, b, operator);

alert(result);
