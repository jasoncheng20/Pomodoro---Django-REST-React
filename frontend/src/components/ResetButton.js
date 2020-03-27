import React, { Component } from 'react';

// Responsible for display of start button
export default class ResetButton extends Component {
    render() {
      return (
    <div>
    <button onClick={this.props.reset}>Reset</button>
   </div>
  );
    }
  }