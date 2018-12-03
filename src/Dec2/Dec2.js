import React, { Component } from 'react';

class Dec2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxIds: '',
      checkSum: '',
    };
  }

  boxIdArray = [];

  findCheckSum() {
    this.boxIdArray = this.boxIdArray;
    let twoCount = 0;
    let threeCount = 0;
    const solution = twoCount * threeCount;

    for (let i = 0; i < this.boxIdArray.length; i++) {
      let tempArray = Array.from(this.boxIdArray[i]);

      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray.includes(tempArray[i])) {
        }
      }
    }

    this.setState({ checkSum: solution });
  }

  solvePuzzle() {
    this.boxIdArray = this.state.boxIds.split(' ');
    this.findCheckSum();
  }

  updateBoxIds(evt) {
    this.setState({
      boxIds: evt.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>December 2nd</h1>
        <input
          type="text"
          value={this.state.frequencies}
          onChange={evt => this.updateBoxIds(evt)}
        />
        <button onClick={evt => this.solvePuzzle(evt)}>Solve Puzzle!</button>
        <p>The Checksum is: {this.state.checkSum}</p>
      </div>
    );
  }
}

export default Dec2;
