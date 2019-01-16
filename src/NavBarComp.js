import React, { Component } from 'react';

class NavBarComp extends Component{

    render()
    {
        return(
            <ul >
                <li><a href="default.asp">Home</a></li>
                <li><a href="default.asp">Users</a></li>
                <li><a href="default.asp">Objects</a></li>
            </ul>
        );
    }
}

export default NavBarComp;
