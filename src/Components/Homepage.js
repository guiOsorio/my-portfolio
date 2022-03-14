import React, { Component } from 'react';

import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Leadership from './Leadership';

class Homepage extends Component {
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
 
export default Homepage;
                
                