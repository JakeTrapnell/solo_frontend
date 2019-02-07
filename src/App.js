import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import UserCrudButtons from './UserCrudButtons';
import RecipeCrudButtons from './RecipeCrudButtons';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Header headerProp="Project Recipes" />
          </header>
            <div className="navbar">
                <Link to="/users">
                <button>Users</button>
                </Link>
                <Link to="">
                <button>Home</button>
                </Link>
                <Link to="/recipes">
                <button>Recipes</button>
                </Link>

            </div>
   
            <div>
              <Route exact={true} path='/users' render={()=>(
                <div>
                  <UserCrudButtons/>
                </div>
              )}/>

              <Route exact={true} path='' render={()=>(
                <div>
                  <Home/>
                </div>
              )}/>

              <Route exact={true} path='/recipes' render={()=>(
                <div>
                  <RecipeCrudButtons/>
                </div>
              )}/>  
            </div>      
        </div>
        </BrowserRouter>
    )
  }  
}
export default App;
