import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import Game from './Game.js'
import Reset from './Reset.js'

class App extends Component {

  render() {
    return (

      
        <div className="App">
          <header className="App-header">
            <Header headerProp="My Solo Project" />
          </header>
          <p>Please play tic tac toe!!!</p>
          <Game />
          <Reset/>
        </div>
    )
  }  
}

export default App;
