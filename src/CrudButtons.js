import React, { Component } from 'react';
import axios from 'axios';

class CrudButtons extends Component{
    
    constructor(props){
        super(props);
        this.state = {name: "default"};
        }
    
    

    getName =() =>{
        axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=88f96886',
            //url: 'http://www.omdbapi.com/?s=harry&apikey=88f96886',
            responseType: 'json'
          })
          .then(response=>{
              if(response.data !== undefined){
                //console.log(response);
                //.Search is part of the api response not built in or set var
                //this.setState({name: response.data.Search});
                this.setState({name: response});
                console.log(response.data);
              }
              else{
                  console.log("failed");                 
              }
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

            
            <p>{JSON.stringify(this.state.name.data)}</p>
    



            </div>

        );
    }
}

export default CrudButtons;