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
    case '=':
      if (!total) {
        return {};
      }
      total = operate(total, next, operation);
      return { total, next: null, operation: buttonName };

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
          if (next === '0' && buttonName === '.') {
            return { next: '0.' };
          }
          return { next: next && (next !== '0') ? next + buttonName : buttonName };
        }
        if (total === '0' && buttonName === '.') {
          return { total: '0.' };
        }
        return { total: total && (total !== '0') ? total + buttonName : buttonName };
      }
  }
  return {};
};

export default calculate;
