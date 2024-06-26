import React, { Component } from 'react';

export default class Quiz extends Component {
  render() {
    return (
      <div className="App">
        <h1>Question</h1>
        <div className="question">
          <h3>Which is the only mammal that can jump?</h3>
          <span>1 of 15</span>
          <ul className="options">
            <li>
              <button>Dog</button>
            </li>
            <li>
              <button>Elephant</button>
            </li>
            <li>
              <button>Goat</button>
            </li>
            <li>
              <button>Lion</button>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button className="pre">Previous</button>
          <button className="next">Next</button>
          <button className="quit">Quit</button>
        </div>
      </div>
    );
  }
}
