import React, { Component } from "react";
import "./style.css";

// Responsible for display of reset button
export default class ResetButton extends Component {
  render() {
    return (
      <button className="timerbutton" onClick={this.props.reset}>
        Reset
      </button>
    );
  }
}
