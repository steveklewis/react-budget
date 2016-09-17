import React, { Component } from 'react';
import Input from './Input';


class Debit extends Component {
  handleUserInput(inputValue) {
    this.props.onDebitChange(this.props.debitIndex, inputValue);
  }
  render() {
    return (
      <div className="debit">
        <div>Debit</div>
        <Input value={this.props.debit} onUserInput={this.handleUserInput.bind(this)} /> 
      </div>
    );
  }

}

export default Debit;
