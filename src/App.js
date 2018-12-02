import React, { Component } from "react";
import "./App.scss";
import Dec1 from "./Dec1/Dec1";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Advent of Code</h1>
          <Dec1 />
        </div>
      </div>
    );
  }
}

export default App;
