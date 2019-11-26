import React, {Component} from 'react';
import LogIn from './Authorization/LogIn';
import SignIn from './Authorization/SignIn';

export default class Authorization extends Component {
    state = {
        logIn: false,
        signIn: false
    }

    logInState = () => {
        this.setState({
            logIn: !this.state.logIn
        })
    }

    signInState = () => {
        this.setState({
            signIn: !this.state.signIn
        })
    }

    exit() {
        localStorage.setItem('status', 'false');
        localStorage.setItem('user-name', '');
        window.location.reload();
    }

    loginSuccess() {
        let userValue = localStorage.getItem('user-name');
        
        return(
                <ul>
                    <li>{userValue}</li> 
                    <li><a onClick={() => this.exit()} className='register'>Exit</a></li>
                </ul>
        );
    }

    loginNoSuccess() {
        return(
            <ul>
                <li><a onClick={this.logInState} >Log In</a></li> 
                <li><a onClick={this.signInState} className='register'>Sign In</a></li>
            </ul>
        );
    }

    render() {
        // Здесь идет проверка. Если была нажать кнопка вход, то откроется система авторизации.
        // Если была нажата кнопка регистрация, то откроется система регистрации.
        let logIn, signIn;  

        if(this.state.logIn) {
            logIn = <LogIn close={this.logInState}/>
        }
        if(this.state.signIn) {
            signIn = <SignIn close={this.signInState}/>
        }

        // Здесь идет проверка. Если вход или регистрация прошли успешно, то в шапке будет отображаться 
        // почта пользователя и кнопка выход, если регистрация или вход еще не были сделаны то отображаются 
        // кнопка регистрация и вход.
        let authorizationBlock;
        let statusValue = localStorage.getItem('status');

        if(statusValue === 'true') {
            authorizationBlock = this.loginSuccess();
        } 
        else  {
            authorizationBlock = this.loginNoSuccess();
        }

        return(
            <>
                {authorizationBlock}
                {logIn}
                {signIn}
            </> 
        );
    }
}