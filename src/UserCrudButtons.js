import React, { Component } from 'react';
import axios from 'axios';

class UserCrudButtons extends Component{
    

    constructor(){
        super();
        this.state = {userData: {}, name: ""};

         axios.get("http://localhost:8080/Solo-API/rest/user/json/1")
         .then(response => {
             console.log({userData: response.data})
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
        }).then(response=>{
            console.log(response);
        })
        console.log(this.state.name + " : added to database");
    }

    readUser =() =>{
        axios({
            method: 'GET',
            mode: 'no-cors',
            url: `http://localhost:8080/Solo-API/rest/user/json/${this.state.id}`,
            responseType: 'json'
          })
          .then(response=>{
              if(response.data !== undefined){
                this.setState({name: response.data.name});
                console.log(response.data);
              }
              else{
                  console.log("failed to read user");                 
              }
          });
    }


    deleteUser =() =>{
        axios({
            method: 'DELETE',
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id,
            responseType: 'json'
        })
        console.log("user deleted");
    }

    updateUser =() =>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id,
            data:  {name: this.state.name} 
        })
        .then(response=>{
            console.log(response);
        })
    }
    
    render()
    {
        return(
            <div className= "crudButtons">
            <br/>
            <h2>Users</h2>
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
            <button className= "navButton" onClick={this.updateUser}>Update</button>
            <button className= "navButton" onClick={this.deleteUser}>Delete</button>

            <br/>            
            <br/>
            <p>ID: {this.state.id}</p>
            <br/>
            <p>User Name: {this.state.name}</p>
            <br/>
            <p></p>
            </div>

        );
    }
}

export default UserCrudButtons;