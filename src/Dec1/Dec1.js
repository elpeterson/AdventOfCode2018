import React, { Component } from "react";
import "./Dec1.scss";

class Dec1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      puzzleSolution: ""
    };
  }

  result = 0;

  puzzleLoop() {
    let puzzleArray = this.state.inputValue.split(" ");

    for (let i = 0; i < puzzleArray.length; i++) {
      if (puzzleArray[i].includes("+")) {
        this.result += Number(puzzleArray[i].substring(0));
      }

      if (puzzleArray[i].includes("-")) {
        this.result -= Number(puzzleArray[i].substring(1));
      }
    }
  }

  solvePuzzle() {
    this.puzzleLoop();

    this.setState({ puzzleSolution: this.result });
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>December 1st</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <button onClick={evt => this.solvePuzzle(evt)}>Solve Puzzle!</button>
        <p>The Solution is: {this.state.puzzleSolution}</p>
      </div>
    );
  }
}

export default Dec1;
