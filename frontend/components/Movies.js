import React, {Component} from 'react';
import CinemaServices from '../services/cinemaServices'; 
import ErrorMessage from './Movies/ErrorMessage'; 
import Booking from './Movies/Booking'; 

export default class Movies extends Component {
    CinemaServices = new CinemaServices; 
    state = {
        movies: [],
        error: false,
        loading: true,
        booking: false
    } 

    componentDidMount() {
       this.updateMovies()
    }

    updateMovies() {
        this.CinemaServices.getAllMovies()
        .then(this.onMoviesLoaded)
        .catch(this.onError);
    }

    onMoviesLoaded = (movies) => {
        this.setState({
            movies,
            error: false,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    handleClick = () => {
        let statusValue = localStorage.getItem('status');

        if(statusValue === 'true') {
            this.setState({
                booking: !this.state.booking
            })
        } else alert("To book tickets you need to log in!")
    }

    renderItems(arr) {
        return arr.map(item => {
            const {_id, name, type, duration, src} = item;
            const {booking} = this.state;
            let bookingHall;

            if(booking){
                bookingHall = <Booking close = {this.handleClick}/>
            }
            return (
                <div key={_id} className="movie">
                    <div className="movie-info">
                        <img src={src}></img>
                        <h2>{type}</h2>
                        <h1>{name}</h1>
                        <h3>{duration}</h3>
                    </div>
                    <ul>
                        <li><button onClick={this.handleClick}>12:00</button> <p>from 15 $</p></li>
                        <li><button onClick={this.handleClick}>14:00</button> <p>from 15 $</p></li>
                        <li><button onClick={this.handleClick}>18:00</button> <p>from 20 $</p></li>
                        <li><button onClick={this.handleClick}>20:00</button> <p>from 25 $</p></li>
                    </ul>
                    {bookingHall}
                    <div className="bottom-line"></div>
                </div>
            )
        })
    } 

    render() {
        const {movies, error, loading} = this.state; 
        let movieComponent;
        
        if(error) {
            movieComponent = <ErrorMessage />
        }
        else movieComponent = this.renderItems(movies);

        return(
            <div className="movies">
                <div className="white-line"></div>
                <div className="border-right">
                    <div className="border-left">
                        <div className={loading ? "spinner" : ""}></div>
                        {movieComponent}
                        <div className="comment">Note: all sessions begin with the display of advertising 
                        and information block according to the schedule of the cinema. Information about 
                        the exact duration of the advertising and information block specify in the cinema.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}