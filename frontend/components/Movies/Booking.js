import React, {Component} from 'react';

export default class Booking extends Component {
    state = {
        position1: false,
        position2: false,
        position3: false,
        position4: false,
        position5: false
    }
    
    handleClick = (num) => {
        switch (num) {
            case 1:
                this.setState({
                    position1: !this.state.position1
                })
                break;
            case 2:
                this.setState({
                    position2: !this.state.position2
                })
                break;
            case 3:
                this.setState({
                    position3: !this.state.position3
                })
                break;
            case 4:
                this.setState({
                    position4: !this.state.position4
                })
                break;
            case 5:
                this.setState({
                    position5: !this.state.position5
                })
                break;
            default:
                alert( "Error in code!" );
        }
    } 

 
    render() {
        const{position1, position2, position3, position4, position5} = this.state;

        return (
            <div className="back-booking"> 
                <div className="booking">
                    <div className="screen"><span>SCREEN</span></div>
                    <div className="positions">
                        <ul>
                            <li onClick={(e) => {this.handleClick(1,e)}} className={position1 ? "selected" : ""}>1</li>
                            <li onClick={(e) => {this.handleClick(2,e)}} className={position2 ? "selected" : ""}>2</li>
                            <li onClick={(e) => {this.handleClick(3,e)}} className={position3 ? "selected" : ""}>3</li>
                            <li onClick={(e) => {this.handleClick(4,e)}} className={position4 ? "selected" : ""}>4</li>
                            <li onClick={(e) => {this.handleClick(5,e)}} className={position5 ? "selected" : ""}>5</li>
                        </ul>
                    </div>
                    <div onClick={() => {this.props.close()}} className="close">close</div>
                    <button onClick={() => {alert("Server not working! =(")}}>BUY</button>
                </div>
            </div>
        );
    }
}