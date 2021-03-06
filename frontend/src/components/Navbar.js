import React from 'react';
import './Navbar.css'
import tomatoclock from '../assets/logo3.png'

const navbar = props => (
    <header className = 'navbar'>
        <nav className = 'navbar_navigation'>
            <div></div>
            <img className = 'logo_image' src = {tomatoclock}/>
            <div className = 'navbar_logo'><a href = "/"> Pomodoro Adventures </a></div>
            <div className = 'navbar_spacer'></div>
            <div className = 'navbar_items'>
                <ul>
                    <li><a href = "/about">About</a></li>
                    <li><a href = "/">Sign Up!</a></li>
                    <li><a href = "/accounts/logout">Log Out</a></li>
                    <li><a href = "/accounts/google/login/">Log In</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar