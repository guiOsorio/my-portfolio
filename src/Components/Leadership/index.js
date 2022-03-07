import React, { Component } from 'react';
import './styles.css';

import champs from '../../assets/Champs.JPG';

// Have left half be about experience on tennis team, and right half be on the experience on ACM (provide at least one picture for each)
// Later on, develop a page with specific info on each experience (one for tennis and one for ACM, list accomplishments and summary for each)

class Leadership extends Component {
    state = {  } 
    render() { 
        return (
            <div className='section__leadership screen-size'>
                <h2>LEADERSHIP EXPERIENCE</h2>
                <div className='leadership__tennis'>
                    <h4>USD Men's Tennis Team</h4>
                    <div>

                    </div>
                </div>
                <div className='leadership__acm'>
                    <h4>President of ACM Chapter at USD</h4>
                    <div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Leadership;