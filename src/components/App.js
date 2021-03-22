import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const nextState = calculate({ ...this.state }, buttonName);
    this.setState(prevState => ({ ...prevState }, { ...nextState }));
  }

  render() {
    return (
      <div className="app">
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
