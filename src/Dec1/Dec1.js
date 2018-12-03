import React, { Component } from 'react';
import './Dec1.scss';

class Dec1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequencies: '',
      resultingFrequency: '',
      repeatedFrequency: '',
    };
  }

  result = 0;
  frequencyArray = [];
  resultsArray = [0];
  repeatFrequencyFound = false;

  frequencyLoop() {
    for (let i = 0; i < this.frequencyArray.length; i++) {
      if (this.frequencyArray[i].includes('+')) {
        this.result += Number(this.frequencyArray[i].substring(0));
      }

      if (this.frequencyArray[i].includes('-')) {
        this.result -= Number(this.frequencyArray[i].substring(1));
      }

      if (this.resultsArray.includes(this.result)) {
        this.repeatFrequencyFound = true;
        this.setState({ repeatedFrequency: this.result });
        break;
      }

      this.resultsArray.push(this.result);
    }
  }

  solvePuzzle() {
    this.frequencyArray = this.state.frequencies.split(' ');
    this.frequencyLoop();
    this.setState({ resultingFrequency: this.result });
    while (this.repeatFrequencyFound === false) {
      this.frequencyLoop();
    }
  }

  updateFequencies(evt) {
    this.setState({
      frequencies: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>December 1st</h1>
        <input
          type="text"
          value={this.state.frequencies}
          onChange={evt => this.updateFequencies(evt)}
        />
        <button onClick={evt => this.solvePuzzle(evt)}>Solve Puzzle!</button>
        <p>The Solution is: {this.state.resultingFrequency}</p>
        <p>The Repeated Frequency is: {this.state.repeatedFrequency}</p>
      </div>
    );
  }
}

export default Dec1;
