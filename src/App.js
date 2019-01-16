import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import NavBarComp from './NavBarComp'

class App extends Component {

  render() {
    return (

      
        <div className="App">
          <header className="App-header">
            <Header headerProp="My Solo Project" />
          </header>
            <NavBarComp/>
        </div>
    )
  }  
}

export default App;
