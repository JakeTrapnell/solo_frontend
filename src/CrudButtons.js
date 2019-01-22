import React, { Component } from 'react';
import CreateComp from  './CreateComp'
import ReadComp from  './ReadComp'
import UpdateComp from  './UpdateComp'
import DeleteComp from  './DeleteComp'

let userInput;

class CrudButtons extends Component{

    constructor(props){
        super(props);
        this.state ={name: ""};
    
    }

    update =(event)=>{
        userInput = event.target.value;
        console.log(userInput);
        this.setState({name: userInput});
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
                <input id="userInput" type="text" placeholder="Enter your name" onChange={this.update}/>
            </form>
            <br/>
            <p>Name: {this.state.name}</p>
            <br/>
            <CreateComp/>
            <ReadComp/>
            <UpdateComp/>
            <DeleteComp/>



            </div>

        );
    }
}

export default CrudButtons;