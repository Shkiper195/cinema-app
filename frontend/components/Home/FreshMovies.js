import React, {Component} from 'react';
import movies1 from '../../images/movies1.jpg';
import movies2 from '../../images/movies2.jpg';
import movies3 from '../../images/movies3.jpg';
import {NavLink} from "react-router-dom";

export default class FreshMovies extends Component {
    render() {
        return(
            <div className="fresh-movies">
                <h3>Fresh <span>Movies</span></h3>
                <ul className="content">
                <li>
                    <h4>Toy Story 3</h4><img src={movies1} alt="" />
                    <p>Check out Disney-Pixar's official Toy Story site, watch the <span>Toy Story 3</span> trailer, and meet new characters. Remember, no toy gets left behind!</p>
                    <NavLink to="/movies" className="read-more"><span><span>Read More</span></span></NavLink>
                </li>
                <li>
                    <h4>Prince of Percia: Sands of Time</h4><img src={movies2} alt="" />
                    <p>A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger.</p>
                    <NavLink to="/movies" className="read-more"><span><span>Read More</span></span></NavLink>
                </li>
                <li className="last">
                    <h4>The Twilight Saga: Eclipse</h4><img src={movies3} alt="" />
                    <p>As a string of mysterious killings grips Bella is forced to choose between her love for vampire Edward and her friendship with werewolf Jacob.</p>
                    <NavLink to="/movies" className="read-more"><span><span>Read More</span></span></NavLink>
                </li>
                </ul>
            </div>
        );
    }
}