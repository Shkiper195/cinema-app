// ...ЭТОТ КОМПОНЕНТ ИСПОЛЬЗУЕТСЯ ТОГДА, КОГДА НЕТ РАБОТЫ С СЕРВЕРОМ... 
import React, {Component} from 'react';
import Booking from './Booking';

export default class Movie extends Component {
    state = {
        booking: false
    }

    handleClick = () => {
        this.setState({
            booking: !this.state.booking
        })
    }

    render() {
        const {name, type, duration, src} = this.props;
        const {booking} = this.state;
        let bookingHall;

        if(booking){
            bookingHall = <Booking close = {this.handleClick}/>
        }
       
        return (
            <div className="movie">
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
        );
    }
}