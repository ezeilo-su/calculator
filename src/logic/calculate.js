import operate from './operate';

const calculate = ({ total, next, operation }, btnName) => {
  let result = total; let
    nextNum = next;

  if (btnName === '+/-') {
    result *= -1;
    nextNum *= -1;
    return { result, nextNum };
  }

  result = operate(result, nextNum, operation);
  return { result, nextNum };
};

export default calculate;
