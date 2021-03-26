import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (!Number(numberTwo)) {
    return numberOne;
  }

  let result;
  const firstNumber = new Big(numberOne);
  const secondNumber = new Big(numberTwo);

  switch (operation) {
    case '%':
      result = firstNumber * Big(0.01);
      break;

    case '÷':
      if (Number(numberTwo) === 0) {
        return 'Math Error';
      }
      result = firstNumber / (secondNumber);
      break;

    case '×':
      result = firstNumber * secondNumber;
      break;

    case '-':
      result = firstNumber - secondNumber;
      break;

    case '+':
      result = Math.abs(firstNumber) + Math.abs(secondNumber);
      break;

    default:
      return 'Error';
  }
  return parseFloat(result).toString();
};

export default operate;
