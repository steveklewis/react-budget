import React, { Component } from 'react';
import Credits from './Credits';
import Debits from './Debits';


import './App.css';



class App extends Component {
  constructor() {
    super();

    let credits = [1,2,3];
    let debits = [4,5,6];
    this.state = {
      credits: credits,
      debits: debits,
      total: 0
    }
  }
  handleCreditChange(key, value) {
    var credits = this.state.credits;
    credits[key] = value;
    this.setState({credits: credits});
  }

  handleDebitChange(key, value) {
    var debits = this.state.debits;
    debits[key] = value;
    this.setState({debits: debits});
  }

  handleCalculate() {
    let creditsTotal = this.state.credits.reduce(function(prevCredit, currCredit) {
      return prevCredit + currCredit;
    }, 0);
    let debitsTotal = this.state.debits.reduce(function(prevDebit, currDebit) {
      return prevDebit + currDebit;
    }, 0);
    let total = creditsTotal - debitsTotal;

    this.setState({total: total});
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to react-budget</h2>
        </div>
        <div className="App-inputs">
          <Credits credits={this.state.credits} onCreditChange={this.handleCreditChange.bind(this)} />
          <Debits debits={this.state.debits} onDebitChange={this.handleDebitChange.bind(this)} />
        </div>
        <div>
          <a href="#" onClick={this.handleCalculate.bind(this)}>Calculate</a>
          <div>{this.state.total}</div>
        </div>
      </div>
    );
  }
}

export default App;
