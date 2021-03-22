import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  let cTotal = total;
  let cNext = next;
  const cOperation = operation;
  switch (btnName) {
    case '+/-':
      cTotal *= -1;
      cNext *= -1;
      break;

    default:
      cTotal = operate(cTotal, cNext, cOperation);
      break;
  }
  return { cTotal, cNext, cOperation };
};

export default calculate;
