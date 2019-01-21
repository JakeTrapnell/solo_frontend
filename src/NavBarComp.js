import React, { Component } from 'react';

class NavBarComp extends Component{

    render()
    {
        return(
            <ul >
                <li><button className= "navButton">Home</button></li>
                <li><button className= "navButton">Users</button></li>
                <li><button className= "navButton">Objects</button></li>
            </ul>
        );
    }
}

export default NavBarComp;
