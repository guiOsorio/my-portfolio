import React, { Component } from 'react';
import './styles.css';

import champs from '../../assets/Champs.JPG';

class About extends Component {
    state = {  } 
    render() { 
        return (
            <section className='screen-size section__about'>
                <h2>About me section</h2>
                <picture className='about-img'>
                    <img src={champs} alt='Me' />
                </picture>
            </section>
        );
    }
}
 
export default About;