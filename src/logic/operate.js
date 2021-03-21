import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big();
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

  switch (operation) {
    case '%':
      result = firstNumber / 100;
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
      break;
  }
  return result;
};

export default operate;
