import React, { Component } from 'react';
import './styles.css'

class Welcome extends Component {
    state = {  } 
    render() { 
        return (
            <div className='section__welcome screen-size'>
                <div className='welcome-intro'>
                    <h1>WELCOME-INTRO</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Welcome;