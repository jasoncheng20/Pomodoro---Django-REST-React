import React, { Component } from 'react';

// Responsible for display of start button
export default class StopButton extends Component {
    render() {
      return (
    <div>
    <button onClick={this.props.stopCountdown}>Stop</button>
   </div>
  );
    }
  }