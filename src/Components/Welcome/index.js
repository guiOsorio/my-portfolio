import React, { Component } from 'react';
import './styles.css'

class Welcome extends Component {
    state = {  } 
    render() { 
        return (
            <div className='section__welcome screen-size'>
                <div className='welcome-intro'>
                    <h1>WELCOME TO MY PORTFOLIO WEBSITE</h1>
                    <p>
                        Here you will learn about my personal projects in software development and data analytics,
                        about my school education and the extra knowledge I have gathered throughout the years, and my leadership experiences in college.
                    </p>
                </div>
            </div>
        );
    }
}
 
export default Welcome;