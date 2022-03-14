import React, { Component } from 'react';
import './App.css';

import Routes from './Components/Routes';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='small-screen'>
                    The screen of your browser is too small. Please open this webpage on a laptop or adjust your browser's screen to see this website's content. 
                    A responsive version of this website is under development.
                </div>
                <div className='maindiv'>
                    <Routes />
                </div>
            </div>
        );
    }
}
 
export default App;