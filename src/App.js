import React, { Component } from 'react';
import './App.scss';
import Dec1 from './Dec1/Dec1';
import Dec2 from './Dec2/Dec2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Advent of Code</h1>
          <Dec2 />
          <Dec1 />
        </div>
      </div>
    );
  }
}

export default App;
