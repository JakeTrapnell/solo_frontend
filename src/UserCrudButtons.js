import React, { Component } from 'react';
import axios from 'axios';

class UserCrudButtons extends Component{
    

    constructor(){
        super();
        this.state=
            { 
            userData: [{}]
            };

        axios.get("http://localhost:8080/Solo-API/rest/user/json")
        .then(response => {
            this.setState({userData: response.data})
        })
        }

    updateName = (event) =>{
        this.setState({name: event.target.value});
        console.log(this.state.name);
        //handles name input change not the database
    }

    updateId = (event) =>{
        this.setState({id: event.target.value});
        console.log(this.state.id);
        //handles id input change not the database
    }
    
    createUser =() =>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            data: {
                name: this.state.name
            }
            
        });
        console.log(this.state.name + " : added to database");
    }

    readUser =() =>{
        axios({
            method: 'GET',
            url: 'http://localhost:8080/Solo-API/rest/user/json' + this.setState.id,
            responseType: 'json'
          })
          .then(response=>{
              if(response.data !== undefined){
                this.setState({name: response.data[0].name});
              }
              else{
                  console.log("failed");                 
              }
          });
    }


    deleteUser =() =>{
        axios({
            method: 'DELETE',
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id,
            responseType: 'json'
        })
    }

    
    render()
    {
        return(
            <div className= "crudButtons">
            <br/>
            <form>
                <br/>
                <input ref="id" id="userInputOne" type="number" placeholder="Enter id number" onChange={this.updateId}/>
                <br/>
                <input ref="name" id="userInput" type="text" placeholder="Enter your name" onChange={this.updateName}/>
            </form>
            <br/>
            <br/>
            <button className= "navButton" onClick={this.createUser}>Create</button>
            <button className= "navButton" onClick={this.readUser}>Search</button>
            <button className= "navButton">Update</button>
            <button className= "navButton" onClick={this.deleteUser}>Delete</button>

            <br/>            
            <p>User Name: {JSON.stringify(this.state.name)}</p>
            <br/>
            
    

            </div>

        );
    }
}

export default UserCrudButtons;