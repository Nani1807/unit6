function mathOperation(numbers, operator) {
  let result;

  switch (operator) {
    case '+':
      result = numbers.reduce((acc, curr) => acc + curr);
      break;
    case '-':
      result = numbers.reduce((acc, curr) => acc - curr);
      break;
    case '*':
      result = numbers.reduce((acc, curr) => acc * curr);
      break;
    case '/':
      result = numbers.reduce((acc, curr) => acc / curr);
      break;
    default:
      result = "Невідомий оператор";
  }

  return result;
}

const numbers = [5, 3, 2];
const operator = '+';
const result = mathOperation(numbers, operator);

alert(result);
