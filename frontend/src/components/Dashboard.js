import React, { Component } from "react";
import "./style.css";
import { render } from "react-dom";
import Navbar from "./Navbar";
import Pomodoro from "./Pomodoro.js";
import ShortBreak from "./ShortBreak.js";
import LongBreak from "./LongBreak.js";
import tomato from "../assets/Tomato.gif";
import QuestList from "./QuestList.js";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  
  };

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
