import React, { Component } from 'react';
import axios from 'axios';

let userInput;


class CrudButtons extends Component{
    state = {
        userData: []
    }
    

    getName =() =>{
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=88f96886',
            responseType: 'json'
          })
          .then(response=>{
            console.log(response);
            const userData = response;
            this.setState({name: response.data.Search});
          });
    }

    
    render()
    {
        return(
            <div className= "crudButtons">
            
            <br/>
            <br/>
            <br/>
            <form>
                Name:
                <br/>
                <input id="userInput" type="text" placeholder="Enter your name"/>
            </form>
            <br/>
            <p>Name:</p>
            <br/>
            <button className= "navButton" onClick={this.getName}>Create</button>
            <button className= "navButton">Search</button>
            <button className= "navButton">Update</button>
            <button className= "navButton">Delete</button>

            <p>my name is:</p>



            </div>

        );
    }
}

export default CrudButtons;