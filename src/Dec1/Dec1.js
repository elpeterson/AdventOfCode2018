import React, { Component } from "react";
import "./Dec1.scss";

class Dec1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequencies: "",
      resultingFrequency: "",
      repeatedFrequency: ""
    };
  }

  result = 0;
  frequencyArray = [];
  resultsArray = [0];

  frequencyLoop() {
    let frequencyArray = this.frequencyArray;

    for (let i = 0; i < frequencyArray.length; i++) {
      if (frequencyArray[i].includes("+")) {
        this.result += Number(frequencyArray[i].substring(0));
      }

      if (frequencyArray[i].includes("-")) {
        this.result -= Number(frequencyArray[i].substring(1));
      }

      console.log("result = " + this.result);
      console.log("results array = " + this.resultsArray);
      console.log("repeated frequency = " + this.state.repeatedFrequency);

      if (this.state.repeatedFrequency === "") {
        for (let r = 0; r < this.resultsArray.length; r++) {
          if (this.result === this.resultsArray[r]) {
            this.setState({ repeatedFrequency: this.result });
          }
        }
      }

      this.resultsArray.push(this.result);
    }
  }

  solvePuzzle() {
    this.frequencyArray = this.state.frequencies.split(" ");
    this.frequencyLoop();
    this.setState({ resultingFrequency: this.result });
    if (this.state.repeatedFrequency === "") {
      this.frequencyLoop();
    }
  }

  updateFequencies(evt) {
    this.setState({
      frequencies: evt.target.value
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
