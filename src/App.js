import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import NavBarComp from './NavBarComp'
import CrudButtons from './CrudButtons'
import CreateComp from  './CreateComp'
import ReadComp from  './ReadComp'
import UpdateComp from  './UpdateComp'
import DeleteComp from  './DeleteComp'

class App extends Component {
  state ={
    objects: 'Recipes',
  }


  render() {
    return (

      
        <div className="App">
          <header className="App-header">
            <Header headerProp="My Solo Project" />
          </header>
            <NavBarComp/>
            <CrudButtons/>          
            <body>
              <p>This application will allow you to create and store {this.state.objects}</p>
            </body>
        </div>
    )
  }  
}

export default App;
