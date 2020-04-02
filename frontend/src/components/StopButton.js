import React, { Component } from "react";
import "./style.css";

// Responsible for display of start button
export default class StopButton extends Component {
  render() {
    return (
      <button className="timerbutton" onClick={this.props.stopCountdown}>
        Stop
      </button>
    );
  }
}
