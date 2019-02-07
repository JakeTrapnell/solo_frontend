import React, { Component } from 'react';
import watermelon from './images/watermelon.png';

class Home extends Component {
    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                    <h2>This application will allow you to create and store your favourite recipes!</h2>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <img alt="watermelon" width="450" height="375" src={watermelon}/>
            </div>
        )
    }
}
export default Home;
      