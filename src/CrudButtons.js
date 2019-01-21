import React, { Component } from 'react';

class CrudButtons extends Component{

    render()
    {
        return(
            <div>
                <button className= "navButton">Create</button>
                <button className= "navButton">Read</button>
                <button className= "navButton">Update</button>
                <button className= "navButton">Delete</button>
            </div>
        );
    }
}

export default CrudButtons;