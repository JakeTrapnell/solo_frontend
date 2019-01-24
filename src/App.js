import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import NavBarComp from './NavBarComp'
import CrudButtons from './CrudButtons'


class App extends Component {
  render() {
    return (

      
        <div className="App">
          <header className="App-header">
            <Header headerProp="My Solo Project" />
          </header>
            <NavBarComp/>
            <CrudButtons/>          
            
              <p>This application will allow you to create and store recipes</p>
            
        </div>
    )
  }  
}

export default App;
