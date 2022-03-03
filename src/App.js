import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Welcome from './Components/Welcome';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Leadership from './Components/Leadership';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Header />
                <Welcome />
                <About />
                <Projects />
                <Education />
                <Leadership />
            </div>
        );
    }
}
 
export default App;