import React, {Component} from 'react';
import SignInServices from '../.././services/signInServices'; 

export default class SignIn extends Component {
    SignInServices = new SignInServices; 
    state = {
        mail: '',
        password: '',
        errorMail: false,
        errorPassword: false,
        message: '',
        greenMessage: false
    } 

    errorHandling = (errorMail, errorPassword, message, greenMessage) => {
        this.setState({
            errorMail: errorMail,
            errorPassword: errorPassword,
            message: message,
            greenMessage: greenMessage
        });
    }

    sendData = () => {
        const {mail, password} = this.state;
        
        if(mail !== '') {
            this.errorHandling(false, false, '', false);

            if(password !== '') {
                this.errorHandling(false, false, 'Loading...', true);

                this.SignInServices.setSignIn(mail, password)
                .then(data => {
                    if(data == 200) {
                        localStorage.setItem('status', 'true');
                        localStorage.setItem('user-name', mail);
                        window.location.reload()
                    }
                })
                .catch(() => this.errorHandling(true, true, 'Server error...', false))
            } else {
                this.errorHandling(false, true, 'This field is required.', false);
            }
        } else {
            this.errorHandling(true, false, 'This field is required.');
        }
    }

    handleChangeMail = (event) => {
        this.setState({
            mail: event.target.value
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="back-sign">
                <div className="sign">
                    <h1>SIGN IN</h1>
                    <div className="form">
                        <label className="form-label">EMAIL</label>
                        <input className={this.state.errorMail ? "form-input error" : "form-input"} onChange={this.handleChangeMail}/>
                        <label className="form-label">PASSWORD</label>
                        <input className={this.state.errorPassword ? "form-input error" : "form-input"} onChange={this.handleChangePassword}/>
                        <button onClick={this.sendData}>SIGN IN</button>
                        <div className={this.state.greenMessage ? "message green" : "message"}>{this.state.message}</div>
                    </div>
                    <div className="white-line"></div>
                    <div onClick={() => {this.props.close()}} className="close">Close</div>
                </div>
            </div>
        );
    }
}