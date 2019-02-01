import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import NavBarComp from './NavBarComp'
import UserCrudButtons from './UserCrudButtons';
import RecipeCrudButtons from './RecipeCrudButtons';


class App extends Component {
  render() {
    return (

      
        <div className="App">
          <header className="App-header">
            <Header headerProp="My Solo Project" />
          </header>
            <br/>
            <p>This application will allow you to create and store recipes</p>
            <br/>
            <br/>
            <UserCrudButtons/> 
            <br/>
            <br/>
            <RecipeCrudButtons/>         
        </div>
    )
  }  
}
export default App;
