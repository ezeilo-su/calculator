import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (!Number(numberTwo) && operation !== '%' && operation !== '÷') {
    return numberOne;
  }

  let result = '0';
  const firstNumber = Big(Number(numberOne));
  const secondNumber = Big(Number(numberTwo));

  switch (operation) {
    case '%':
      if (Number(numberTwo)) {
        result = secondNumber * Big(0.01);
      } else if (Number(numberOne)) {
        result = firstNumber * Big(0.01);
      }
      break;

    case '÷':
      if (numberTwo === null) {
        return numberOne;
      }
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
