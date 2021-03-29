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
      return { total: next ? total : (total * -1).toString(), next: next ? (next * -1).toString() : next };
    case '%':
    case '÷':
    case '×':
    case '-':
    case '+':
    case '=':
      if (!total) {
        return {};
      }
      return { total: operate(total, next, operation), next: null, operation: buttonName };

    default:

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
