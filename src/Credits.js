import React, { Component } from 'react';
import Credit from './Credit';

import './Credits.css';

class Credits extends Component {
  handleCreditChange(key, value) {
    this.props.onCreditChange(key, value);
  }
  render() {
    return (
      <div className="credits">
        <div>Credits!</div>
        {this.props.credits.map(function(credit, index) {
          return <Credit key={index} creditIndex={index} credit={credit} onCreditChange={this.handleCreditChange.bind(this)} /> 
        }, this)}
      </div>
    );
  }

}

export default Credits;
