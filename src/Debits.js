import React, { Component } from 'react';
import Debit from './Debit';

import './Debits.css';

class Debits extends Component {
  handleDebitChange(key, value) {
    this.props.onDebitChange(key, value);
  }
  render() {
    return (
      <div className="debits">
        <div>Debits!</div>
        {this.props.debits.map(function(debit, index) {
          return <Debit key={index} debitIndex={index} debit={debit} onDebitChange={this.handleDebitChange.bind(this)} /> 
        }, this)}
      </div>
    );
  }

}

export default Debits;
