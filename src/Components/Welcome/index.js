import React, { Component } from 'react';
import './styles.css'

class Welcome extends Component {
    state = {  } 
    render() { 
        return (
            <div className='section__welcome screen-size'>
                <h1 className='welcome-intro'>WELCOME-INTRO</h1>
            </div>
        );
    }
}
 
export default Welcome;