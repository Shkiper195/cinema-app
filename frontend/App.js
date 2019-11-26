import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Movies from './components/Movies';
import Contacts from './components/Contacts';
import News from './components/News';
import {HashRouter, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="tail-top">
        <div className="tail-bottom">
          <div className="main">
            <HashRouter>
              <Header />
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/movies' component={Movies}/>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/news' component={News}/>
              <Footer />
            </HashRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
