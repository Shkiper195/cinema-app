import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Slogan extends Component {
    render() {
        return(
            <div className="slogan">
                <div className="image"></div>
                <div className="slogan-text">
                    <h2>We are breaking<span>All Limitations</span></h2>
                    <p>Lorem ipsum dolor consectetur adipisicing elit, sed do eiusmod tempor incididunt labore etolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris.</p>
                    <NavLink to="/about" className="learn-more"><span><span>Learn More</span></span></NavLink>
                </div>
            </div>
        );
    }
}