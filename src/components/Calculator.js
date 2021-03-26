import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
// import '../assets/Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const nextState = calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, buttonName);

    setState({ ...state, ...nextState });
  };

  return (
    <div className="calc-page">
      <h3 className="calc-heading">Let’s do some math!</h3>
      <div className="calculator">
        <Display
          val={state.operation && state.next ? state.next : state.total || '0'}
        />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
