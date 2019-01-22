import React, { Component } from 'react';

class NavBarComp extends Component{

    render()
    {
        return(
            <div className="navbar">
                <button>Home</button>
                <button>Users</button>
                <button>Recipes</button>

            </div>
                
        );
    }
}

export default NavBarComp;
