import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Authorization from './Authorization';

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="row-1">
                    <div className="brand"><a href="index.html">Cinema <span>World</span></a></div>
                    <Authorization />
                </div>
                <div className="row-2">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li> 
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/movies" activeClassName="active">Movies</NavLink></li>
                        <li><NavLink to="/contacts" activeClassName="active">Contacts</NavLink></li>
                        <li className="last"><NavLink to="/news" activeClassName="active">News</NavLink></li>
                    </ul>
                </div>
            </div> 
        );
    }
}