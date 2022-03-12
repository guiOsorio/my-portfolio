import React, { Component } from 'react';
import './styles.css';

import WCCChamps from '../../assets/WCC_Champs.JPG';
import Champs from '../../assets/Champs.JPG';
import ACMTeam from '../../assets/ACM_Teamrs.jpeg';
import ACMLogo from '../../assets/ACM_Logo.png';

// Have left half be about experience on tennis team, and right half be on the experience on ACM (provide at least one picture for each)
// Later on, develop a page with specific info on each experience (one for tennis and one for ACM, list accomplishments and summary for each)
// Text on the left side, image on the right side
// Write traits based on brainstorming from Udemy Resume course Google Doc

class Leadership extends Component {
    state = {  } 
    render() { 
        return (
            <div id='leadership' className='section__leadership'>
                <h2>LEADERSHIP EXPERIENCE</h2>
                <div className='leadership__tennis'>
                    <h4>USD MEN'S TENNIS TEAM</h4>
                    <div className='leadership__text-box'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                    </div>
                    <div className='leadership__images'>
                        <div className='img-1'><img src={WCCChamps} /></div>
                        <div className='img-2'><img src={Champs} /></div>
                    </div>
                </div>
                <div className='leadership__acm'>
                    <h4>PRESIDENT OF ACM CHAPTER AT USD</h4>
                    <div className='leadership__text-box'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In tellus integer feugiat scelerisque varius morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.  
                        </p>
                    </div>
                    <div className='leadership__images'>
                        <div className='img-1'><img src={ACMTeam} /></div>
                        <div className='img-2'><img src={ACMLogo} /></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Leadership;