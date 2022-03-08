import React, { Component } from 'react';
import './styles.css';

import { FaBars } from 'react-icons/fa';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='app-header'>
                <nav className="nav">
                    <div className="container-fluid nav-links">
                        <a href="#" className="navbar-brand home-link"><span className='black'>HOME</span></a>
                        <button className="navbar-toggler ms-auto menu-bar black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                            {<FaBars />}
                        </button>
                        <div className="collapse navbar-collapse link-tags" id="navbarNavDropdown">
                            <a href="#about"><span className='black'>About</span></a>
                            <a href='#projects'><span className='black'>Projects</span></a>
                            <a href='#education'><span className='black'>Education</span></a>
                            <a href='#leadership'><span className='black'>Leadership</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Header;