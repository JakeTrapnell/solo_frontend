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
            <Header headerProp="Project Recipes" />
          </header>
            <br/>
            <h2>This application will allow you to create and store your favourite recipes!</h2>
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
