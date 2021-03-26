import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
// import '../assets/ButtonPanel.css';

const buttons = [
  [{ name: 'AC', slug: 'ac' }, { name: '+/-', slug: 'plus-minus' }, { name: '%', slug: 'percent' }, { name: '÷', slug: 'divide' }],
  [{ name: '7', slug: 'seven' }, { name: '8', slug: 'eight' }, { name: '9', slug: 'nine' }, { name: '×', slug: 'multiply' }],
  [{ name: '4', slug: 'four' }, { name: '5', slug: 'five' }, { name: '6', slug: 'six' }, { name: '-', slug: 'minus' }],
  [{ name: '1', slug: 'one' }, { name: '2', slug: 'two' }, { name: '3', slug: 'three' }, { name: '+', slug: 'plus' }],
  [{ name: '0', slug: 'zero' }, { name: '.', slug: 'period' }, { name: '=', slug: 'equal-sign' }],
];

export default function ButtonPanel(props) {
  return (
    <div className="button-panel">
      {buttons.map((btnRow, ind) => (
        <div key={`btn-${ind}`} className="button-row">
          {btnRow.map(btn => (
            <Button
              key={btn.slug}
              name={btn.name}
              slug={btn.slug}
              clickHandler={() => props.clickHandler(btn.name)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
