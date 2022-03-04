import React, { Component } from 'react';
import './styles.css';

// Have the left half of the page be of a picture of me and the right half of the page to be of text (small bio) - (try different color backgrounds for each half)

class About extends Component {
    state = {  } 
    render() { 
        return (
            <section className='section__about screen-size'>
                <div className='about-left'>
                    <h2>ABOUT ME</h2>
                    <div className='wrapper'>
                        <div id='gui' className='pokemon'></div>
                    </div>
                </div>
                <div className='about-right'>
                    <h3>Mini-Bio</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </section>
        );
    }
}
 
export default About;