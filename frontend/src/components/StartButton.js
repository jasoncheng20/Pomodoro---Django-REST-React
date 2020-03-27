import React, { Component } from 'react';

// Responsible for display of start button
export default class StartButton extends Component {
    render() {
      return (
    <div>
    <button onClick={this.props.startCountdown}>Start</button>
   </div>
  );
    }
  }