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

  puzzleLoop() {
    let frequencyArray = this.state.frequencies.split(" ");

    for (let i = 0; i < frequencyArray.length; i++) {
      if (frequencyArray[i].includes("+")) {
        this.result += Number(frequencyArray[i].substring(0));
      }

      if (frequencyArray[i].includes("-")) {
        this.result -= Number(frequencyArray[i].substring(1));
      }
    }
  }

  solvePuzzle() {
    this.puzzleLoop();
    this.setState({ resultingFrequency: this.result });
    if (true) {
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
      </div>
    );
  }
}

export default Dec1;
