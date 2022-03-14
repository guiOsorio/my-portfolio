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
                            Although tennis is an individual sport, I've been lucky to be a part of a college team with an excellent culture that emphasized ideals 
                            of always putting the team before the individual, while emphasizing the importance of each individual for the team's success.
                            As a team captain, I closely followed the development of many of my teammates, and contributed to the team's culture by always
                            setting a standard with my work ethic.
                        </p>
                        <p>
                            As a student-athlete, I led a busy schedule which required a lot from me in terms of energy and time. Managing my sport, academics, 
                            social life, and independent learning always came naturally to me as I learned to be organized with my physical belongings and with my time.
                        </p>
                        <p>
                            All the hours spent on the tennis court translated in individual and team accomplishments. As a team, we won the WCC Conference tournament
                            3 separate times, and finished the 2018-2019 season with a team-best ranking of #25. Individually, I was voted the WCC Conference Player
                            of the Year in 2019, and received career-best rankings of #30 in singles and #10 in doubles. Additionally, I was the recipient of the 
                            Arthur Ashe Leadership and Sportsmanship Regional Award in 2020.
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
                            Analytics and programming are passions of mine. When facing a long-term injury on the tennis court for the very first time, I 
                            questioned what I could do in my free time. I decided to learn programming and quickly became obsessed with creating software 
                            and analytics models. This passion has taken over my life in the past 2 years.  
                        </p>
                        <p>
                            As I got more comfortable with the new technologies I was learning, I got involved with computer science related extracurricular 
                            activities with USD's computer science club. Although I was the only non-Engineering student involved with the club's activities,
                            other members noticed my dedication and passion for the subject, and soon after I was nomidated to be the club's president.
                            The hard work shown on building <a href='http://usd-acm-website.herokuapp.com/'>the club's website</a> was essential in this process.
                        </p>
                        <p>
                            Stepping into this role gave me new opportunities to improve my skills. By leading board and member meetings, I improved my public
                            speaking skills and became more articulate with my words. Furthermore, this position required me to be organized and have a structured plan
                            for the club. My favorite part of being involved with the ACM at USD was helping students throughout their college journeys by organizing
                            events and providing individual career and technical guidance.
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