import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    let nextState = calculate({
      total: state.total,
      next: state.next,
      operation: state.operation,
    }, buttonName);

    setState({ ...state, ...nextState });
  };

  return (
    <div className="app">
      <Display
        val={state.operation && state.next ? state.next : state.total || '0'}
      />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
