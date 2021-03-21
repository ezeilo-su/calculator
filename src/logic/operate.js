import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big();
  const firstNumber = Big(numberOne);
  const secondNumber = Big(numberTwo);

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
      return Error;
  }
  return result;
};

export default operate;
