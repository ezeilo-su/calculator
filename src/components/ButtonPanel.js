import React from 'react';
import Button from './Button';

// const keyMap = [
//   'AC', '+/-', '%', '÷',
//   '7', '8', '9', '×',
//   '4', '5', '6', '-',
//   '1', '2', '3', '+',
//   '0', '.', '=',
// ];

const buttons = [
  { name: 'AC', slug: 'ac' }, { name: '+/-', slug: 'plus-minus' }, { name: '%', slug: 'percent' }, { name: '÷', slug: 'divide' },
  { name: '7', slug: 'seven' }, { name: '8', slug: 'eight' }, { name: '9', slug: 'nine' }, { name: '×', slug: 'multiply' },
  { name: '4', slug: 'four' }, { name: '5', slug: 'five' }, { name: '6', slug: 'six' }, { name: '-', slug: 'minus' },
  { name: '1', slug: 'one' }, { name: '2', slug: 'two' }, { name: '3', slug: 'three' }, { name: '+', slug: 'plus' },
  { name: '0', slug: 'zero' }, { name: '.', slug: 'period' }, { name: '=', slug: 'equal-sign' },
];

const ButtonPanel = () => (
  <div className="button-panel">
    <div className="button-row">
      {buttons.map(button => (
        <Button
          key={`key-${button.slug}`}
          name={button.name}
        />
      ))}
    </div>
  </div>
);

export default ButtonPanel;
