import React, { Component } from 'react';
import './styles.css';

// Have the left half of the page be of a picture of me and the right half of the page to be of text (small bio) - (try different color backgrounds for each half)

class About extends Component {
    state = {  } 
    render() { 
        return (
            <section id='about' className='section__about'>
                <div className='about-left'>
                    <h2>ABOUT ME</h2>
                    <div className='wrapper'>
                        <div id='gui' className='pokemon'></div>
                    </div>
                </div>
                <div className='about-right'>
                    <h3>Mini-Bio</h3>
                    <p>
                        Hi, my name is Guilherme Osorio. Born in Brazil, but having moved to Portugal at an early age, my success in tennis gave me scholarship
                        opportunities to come play for an American school. With 18 years old, I decided to pursue an opportunity in college tennis at the
                        University of San Diego, playing Division I college tennis. Right before my Senior season began, I found out I had a back injury
                        which would prevent me to play for most of the 2021 year. As tennis was taken away from me, I had to explore my identity outside of the court.
                    </p>
                    <p>
                        Before my injury, I had developed an interest for programming and Computer Science concepts. I knew my passion lied in that area, but
                        I couldn't formally change my undergraduate studies, as my studies in Finance were almost completed. Therefore, I decided to proactively
                        explore software development by taking online courses and applying my knowledge in original projects. In that journey, I got involved with
                        extracurricular activities on campus, earning the President position at my school's Computer Science club, and became more familiar with data
                        analytics. The goal of this website is to highlight the projects I have built, the skills I have developed, and the leadership experiences 
                        I have had in recent years.
                    </p>
                </div>
            </section>
        );
    }
}
 
export default About;