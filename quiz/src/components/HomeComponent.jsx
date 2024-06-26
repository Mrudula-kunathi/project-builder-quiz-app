import React, { Component } from 'react';
import './HomeComponent.css';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <h3 className='quiz'>Quiz App</h3>
        <button id='playButton'>Play</button>
      </div>
    );
  }
}
