import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Pomodoro.js';
import ShortBreak from './ShortBreak.js';
import LongBreak from './LongBreak.js';
import tomato from '../assets/Tomato.gif'
import QuestList from './QuestList.js';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPomodoro: true,
            showShortBreak: false,
            showLongBreak: false
        }
    }

    displayPomodoro = () => {
        this.setState({
            showPomodoro: true,
            showShortBreak: false,
            showLongBreak: false
        })
    }

    displayShortBreak = () => {
        this.setState({
            showPomodoro: false,
            showShortBreak: true,
            showLongBreak: false
        })
    }

    displayLongBreak = () => {
        this.setState({
            showPomodoro: false,
            showShortBreak: false,
            showLongBreak: true
        })
    }

    render(){
        const {showPomodoro, showShortBreak, showLongBreak} = this.state
        return(
            <div className = 'backdrop'>
                <h1>Tomodoro Timer</h1>
                <div className="buttons">
                    <button onClick={this.displayPomodoro}>Pomodoro</button>
                    <button onClick={this.displayShortBreak}>Short Break</button>
                    <button onClick={this.displayLongBreak}>Long Break</button>
                </div>
                <br/>
                <br/>
                {showPomodoro && <Pomodoro/>}
                {showShortBreak && <ShortBreak/>}
                {showLongBreak && <LongBreak/>}
                <img className = "tomato" src = {tomato}/>
                <QuestList/>
            </div>
        )
    }
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
