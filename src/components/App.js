import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const nextState = calculate({ ...this.state }, buttonName);
    this.setState(prevState => ({ ...prevState, ...nextState }));
  }

  render() {
    return (
      <div className="app">
        <Display
          val={this.state.operation && this.state.next ? this.state.next : this.state.total || '0'}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
