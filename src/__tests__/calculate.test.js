import calculate from '../logic/calculate';

describe('User presses AC button', () => {
  test('Clear everything', () => {
    expect(calculate({
      total: '5', next: '3', operation: '+',
    }, 'AC')).toEqual({
      total: null, next: null, operation: null,
    });
  });
  test('Clear everything', () => {
    expect(calculate({
      total: '5', next: '3', operation: '+',
    }, 'AC')).not.toEqual({
      total: '5', next: '3', operation: '+',
    });
  });
});

describe('User presses +/- button', () => {
  test('Makes prev val to change sign', () => {
    expect(calculate({
      total: '5', next: null, operation: null,
    }, '+/-')).toEqual({
      total: '-5', next: null,
    });
  });
  test('Makes prev val to change sign', () => {
    expect(calculate({
      total: '-5', next: null, operation: null,
    }, '+/-')).toEqual({
      total: '5', next: null,
    });
  });

  test('Makes next val to change sign', () => {
    expect(calculate({
      total: '2', next: 10, operation: null,
    }, '+/-')).toEqual({
      total: '2', next: '-10',
    });
  });
  test('Makes next val to change sign', () => {
    expect(calculate({
      total: '2', next: '-10', operation: null,
    }, '+/-')).toEqual({
      total: '2', next: '10',
    });
  });
});

describe('User presses % button', () => {
  test('Returns percentage', () => {
    expect(calculate({
      total: '10', next: null, operation: '%',
    }, '%')).toEqual({
      total: '0.1', next: null, operation: '%',
    });
  });
  test('Returns percentage', () => {
    expect(calculate({
      total: '10', next: '15', operation: '%',
    }, '%')).toEqual({
      total: '0.15', next: null, operation: '%',
    });
  });
});

describe('User presses ÷ button', () => {
  test('Returns the dividend', () => {
    expect(calculate({
      total: '10', next: null, operation: null,
    }, '÷')).toEqual({
      total: '10', next: null, operation: '÷',
    });
  });
  test('Returns the dividend', () => {
    expect(calculate({
      total: '10', next: '5', operation: '÷',
    }, '÷')).toEqual({
      total: '2', next: null, operation: '÷',
    });
  });
});

describe('User presses × button', () => {
  test('Returns the product', () => {
    expect(calculate({
      total: '10', next: null, operation: null,
    }, '×')).toEqual({
      total: '10', next: null, operation: '×',
    });
  });
  test('Returns the dividend', () => {
    expect(calculate({
      total: '10', next: '5', operation: '×',
    }, '×')).toEqual({
      total: '50', next: null, operation: '×',
    });
  });
});

describe('User presses - button', () => {
  test('Returns the difference', () => {
    expect(calculate({
      total: '10', next: null, operation: null,
    }, '-')).toEqual({
      total: '10', next: null, operation: '-',
    });
  });
  test('Returns the difference', () => {
    expect(calculate({
      total: '10', next: '5', operation: '-',
    }, '-')).toEqual({
      total: '5', next: null, operation: '-',
    });
  });
});

describe('User presses + button', () => {
  test('Returns the sum', () => {
    expect(calculate({
      total: '10', next: null, operation: null,
    }, '+')).toEqual({
      total: '10', next: null, operation: '+',
    });
  });
  test('Returns the sum', () => {
    expect(calculate({
      total: '10', next: '5', operation: '+',
    }, '+')).toEqual({
      total: '15', next: null, operation: '+',
    });
  });
});

describe('User presses = button', () => {
  test('Returns the sum', () => {
    expect(calculate({
      total: null, next: null, operation: null,
    }, '=')).toEqual({});
  });
  test('Returns the sum', () => {
    expect(calculate({
      total: '10', next: '5', operation: '+',
    }, '=')).toEqual({
      total: '15', next: null, operation: '=',
    });
  });
});
