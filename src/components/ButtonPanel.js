import React, { Component } from 'react';
import Button from './Button';

const keyMap = [
  'AC', '+/-', '%', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
];

class ButtonPanel extends Component {
  renderButton = key => (
    <Button
      uniqueKey={`key-${key}`}
      name={keyMap[key]}
    />
  )

  render() {
    return (
      <div className="button-panel">
        <div className="button-row">
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
          {this.renderButton(3)}
        </div>
        <div className="button-row">
          {this.renderButton(4)}
          {this.renderButton(5)}
          {this.renderButton(6)}
          {this.renderButton(7)}
        </div>
        <div className="button-row">
          {this.renderButton(8)}
          {this.renderButton(9)}
          {this.renderButton(10)}
          {this.renderButton(11)}
        </div>
        <div className="button-row">
          {this.renderButton(12)}
          {this.renderButton(13)}
          {this.renderButton(14)}
          {this.renderButton(15)}
        </div>
        <div className="button-row">
          {this.renderButton(16)}
          {this.renderButton(17)}
          {this.renderButton(18)}
        </div>
      </div>
    );
  }
}
export default ButtonPanel;