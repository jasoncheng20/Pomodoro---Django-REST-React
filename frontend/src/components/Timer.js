import React, { Component } from 'react';
import './Timer.css';

// Responsible for display of timer component in minutes:seconds
export default class Timer extends Component {

  render(){
    return(
    <h1 className = "timer">
      {this.props.minutes + ':' + this.props.seconds}
    </h1>
    )
  }
}