import React, { Component } from 'react';
import axios from 'axios';

class UserCrudButtons extends Component{
    

    constructor(){
        super();
        this.state = {userData: {}, name: null, password: null, email: null};

         axios.get("http://localhost:8080/Solo-API/rest/user/json/1")
         .then(response => {
             console.log({userData: response.data})
         })
        }

    updateName = (event) =>{
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    updatePassword = (event) =>{
        this.setState({password: event.target.value});
        console.log(this.state.password);
    }

    updateEmail = (event) =>{
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    updateId = (event) =>{
        this.setState({id: event.target.value});
        console.log(this.state.id);
    }
    
    createUser =() =>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/Solo-API/rest/user/json',
            data: {
                name: this.state.name,
                password: this.state.password,
                email: this.state.email
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
                this.setState({
                    name: response.data.name,
                    password: response.data.password,
                    email: response.data.email});
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
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id + '/' + this.state.password,
            responseType: 'json'
        })
        console.log("user deleted");
    }

    updateUser =() =>{
        axios({
            method: 'POST',
            url: 'http://localhost:8080/Solo-API/rest/user/json/' + this.state.id + '/' + this.state.password,
            data: {
                name: this.state.name,
                password: this.state.password,
                email: this.state.email
            }
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
                <input ref="id" id="idInputField" type="number" placeholder="Enter id number" onChange={this.updateId}/>
                <br/>
                <input ref="name" id="nameInputField" type="text" placeholder="Enter your name" onChange={this.updateName}/>
                <br/>
                <input ref="email" id="emailInputField" type="text" placeholder="Enter your email address" onChange={this.updateEmail}/>
                <br/>
                <input ref="password" id="passwordInputField" type="password" name="password" placeholder="Enter your password" onChange={this.updatePassword}/>
            </form>
            <br/>
            <br/>
            <button className= "navButton" onClick={this.createUser}>Create</button>
            <button className= "navButton" onClick={this.readUser}>Search by id</button>
            <button className= "navButton" onClick={this.updateUser}>Update</button>
            <button className= "navButton" onClick={this.deleteUser}>Delete</button>

            <br/>            
            <br/>
            <p>ID: {this.state.id}</p>
            <br/>
            <p>Name: {this.state.name}</p>
            <br/>
            <p>Email: {this.state.email}</p>
            </div>

        );
    }
}

export default UserCrudButtons;