import React, { Component } from 'react';
import axios from 'axios';

class CrudButtons extends Component{
    

    constructor(){
        super();
        this.state = {name: ""};
        }
    
    createUser =() =>{
        axios({
            method: 'post',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            responseType: 'json'
        })
    }

    readUser =() =>{
        axios({
            method: 'get',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            responseType: 'json'
          })
          .then(response=>{
              if(response.data !== undefined){
                this.setState({name: response.data[0].name});
                console.log(response.data[0]);
              }
              else{
                  console.log("failed");                 
              }
          });
    }


    deleteUser =() =>{
        axios({
            method: 'delete',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            responseType: 'json'
        })
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
                <input ref="name" id="userInput" type="text" placeholder="Enter your name"/>
            </form>
            <br/>
            <br/>
            <button className= "navButton" onClick={this.readUser}>Create</button>
            <button className= "navButton" onClick={this.readUser}>Search</button>
            <button className= "navButton">Update</button>
            <button className= "navButton">Delete</button>

            <br/>            
            <p>Name: {JSON.stringify(this.state.name)}</p>
            <br/>
            
    

            </div>

        );
    }
}

export default CrudButtons;