import React, { Component } from "react";
import "./style.css";

// Responsible for display of disabled stop button
export default class DisabledStopButton extends Component {
  render () {
    return(
      <button className="timerbutton_inactive">
        Stop
      </button>
    )
  }
}
