import React, { Component } from "react";
import "./Pomodoro.css";
import Timer from "./Timer";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import ResetButton from "./ResetButton";

export default class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: "00",
      timerRunning: true
    };
    this.tick = null;
    this.secondsRemaining = 1500;
  }

  componentDidMount() {
    this.tick = setInterval(this.countdown, 1000);
  }

  countdown = () => {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;
    this.setState({
      minutes: min,
      seconds: sec
    });
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min
      });
    }
    if (min === 0 && sec === 0) {
      clearInterval(this.tick);
    }
    this.secondsRemaining--;
  };

  startCountdown = () => {
    if (!this.state.timerRunning) {
      this.tick = setInterval(this.countdown, 1000);
      this.setState({ timerRunning: true });
    }
  };

  stopCountdown = () => {
    clearInterval(this.tick);
    this.setState({ timerRunning: false });
  };

  resetCountdown = () => {
    this.setState({
      minutes: 25,
      seconds: "00"
    });
    this.secondsRemaining = 1500;
    clearInterval(this.tick);
    this.setState({ timerRunning: false });
  };

  alert = () => {
    if (!this.secondsRemaining === 0){
      alert('Time to take a break!')
    }
  }

  render() {
    return (
      <div>
        <h2>Quest time:</h2>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
        <StartButton startCountdown={this.startCountdown} />
        <StopButton stopCountdown={this.stopCountdown} />
        <ResetButton reset={this.resetCountdown} />
      </div>
    );
  }
}
