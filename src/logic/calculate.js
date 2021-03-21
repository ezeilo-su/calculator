import operate from './operate';

const calculate = (calcData, btnName) => {
  let { total, next } = calcData;
  const { operation } = calcData;

  switch (btnName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;

    default:
      total = operate(total, next, operation);
      break;
  }
  return { total, next, operation };
};

export default calculate;
