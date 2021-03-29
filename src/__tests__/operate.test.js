import operate from '../logic/operate';

describe('User can make any operations', () => {
  test('Division (÷) operation', () => {
    expect(operate('12', '3', '÷')).toEqual('4');
  });

  test('Multiplication (×) operation', () => {
    expect(operate('6', '3', '×')).toEqual('18');
  });

  test('Subtraction (-) operation', () => {
    expect(operate('10', '4', '-')).toEqual('6');
  });

  test('Addition (+) operation', () => {
    expect(operate('6', '3', '+')).toEqual('9');
  });

  test('Percentage (%) operation', () => {
    expect(operate('6', null, '%')).toEqual('0.06');
  });

  test('Percentage (%) operation', () => {
    expect(operate('6', '10', '%')).toEqual('0.1');
  });
});
