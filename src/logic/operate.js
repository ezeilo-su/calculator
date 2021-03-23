import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const firstNumber = new Big(Number(numberOne));
  const secondNumber = new Big(Number(numberTwo));

  switch (operation) {
    case '%':
      result = firstNumber * Big(0.01);
      break;

    case '÷':
      result = firstNumber / secondNumber;
      break;

    case '×':
      result = firstNumber * secondNumber;
      break;

    case '-':
      result = firstNumber - secondNumber;
      break;

    case '+':
      result = firstNumber + secondNumber;
      break;

    default:
      return 'Error';
  }
  return result.toString();
};

export default operate;
