import React, { Component } from 'react';
import './ResultComponent.css';

export default class Result extends Component {
  render() {
    return (
      <div className='result-container'>
        <h2 className='result-heading'>Result</h2>
        <div className='result-details'>
          <h3>You need more practice!</h3>
          <h1>Your score is 20%</h1>
          <div className='result-stats'>
            <p>Total number of questions: 10</p>
            <p>Number of attempted questions: 9</p>
            <p>Number of correct answers: 3</p>
            <p>Number of wrong answers: 6</p>
          </div>
        </div>
        <button className='play-button'>Play Again</button>
        <button className='home-button'>Back to Home</button>
      </div>
    );
  }
}
