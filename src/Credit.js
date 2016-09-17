import React, { Component } from 'react';
import Input from './Input';


class Credit extends Component {
  handleUserInput(inputValue) {
    this.props.onCreditChange(this.props.creditIndex, inputValue);
  }

  render() {
    return (
      <div className="credit">
        <div>Credit</div>
        <Input value={this.props.credit} onUserInput={this.handleUserInput.bind(this)}/> 
      </div>
    );
  }

}

export default Credit;
