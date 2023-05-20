function mathOperation(obj1, obj2, operator) {
  let result;

  const a = obj1.a;
  const b = obj2.b;

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

  return { result: result.toString() };
}

const obj1 = { a: 5 };
const obj2 = { b: 3 };
const operator = '+';
const result = mathOperation(obj1, obj2, operator);

alert(result.result);
