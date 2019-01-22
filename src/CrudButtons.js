import React, { Component } from 'react';
import CreateComp from  './CreateComp'
import ReadComp from  './ReadComp'
import UpdateComp from  './UpdateComp'
import DeleteComp from  './DeleteComp'

class CrudButtons extends Component{

    render()
    {
        return(
            <div className= "crudButtons">
            
            <br/>
            <br/>
            <br/>
            <form>
                Name:<br/>
                <input></input>
            </form>
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