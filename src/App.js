import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Projects from './Components/Projects';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header />
                <Welcome />
                <About />
                <Projects />
            </div>
        );
    }
}
 
export default App;