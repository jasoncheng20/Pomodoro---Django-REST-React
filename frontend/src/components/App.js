import React, { Component } from 'react';
import './style.css';
import { render } from 'react-dom';
import Navbar from './Navbar'
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
            <div>
                <Navbar/>
                <div className = 'backdrop'>
                    <h2>San Marzano</h2>
                    <div>
                        <button className = 'button' onClick={this.displayPomodoro}>Pomodoro</button>
                        <button className = 'button' onClick={this.displayShortBreak}>Short Break</button>
                        <button className = 'button' onClick={this.displayLongBreak}>Long Break</button>
                    </div>
                    <br/>
                    <br/>
                    {showPomodoro && <Pomodoro/>}
                    {showShortBreak && <ShortBreak/>}
                    {showLongBreak && <LongBreak/>}
                    <img className = 'tomato' src = {tomato}/>
                </div>
                <QuestList/>
            </div>
        )
    }
}

const container = document.getElementById("app");
render(<App />, container);
