import React, { Component } from 'react';

class Input extends Component {
  handleChange(event) {
    this.props.onUserInput(parseInt(event.target.value, 10));
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} type="text" value={this.props.value} />
      </div>
    );
  }
}

export default Input;
