import operate from './operate';

const calculate = (calcData, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  let { total, next, operation } = calcData;

  switch (buttonName) {
    case '+/-':
      return { total: next ? total : total * -1, next: next ? next * -1 : next };

    case '÷':
    case '×':
    case '-':
    case '+':
      if (!total) {
        return {};
      }
      return { operation: buttonName };

    case '=':
      if (total && next) {
        total = operate(total, next, operation);
        return { total, next: null, operation: buttonName };
      } if (total) {
        return { total, operation: buttonName };
      }
      return {};

    default:
      if (total && buttonName === '%') {
        return { total: operate(total, next, buttonName), operation: '=' };
      }
      if (buttonName === '%') {
        return {};
      }

      if (!Number.isNaN(buttonName)) {
        if (operation === '=') {
          return { total: buttonName, operation: null };
        }
        if (operation) {
          return { next: next ? next + buttonName : buttonName };
        }
        return { total: total ? total + buttonName : buttonName };
      }
  }
  return {};
};

export default calculate;
