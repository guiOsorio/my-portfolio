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
                        <a href="/" className="navbar-brand home-link"><span className='light-grey'>HOME</span></a>
                        <button className="navbar-toggler ms-auto menu-bar light-grey" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                            {<FaBars />}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <a href="/advice"><span className='light-grey'>Advice</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Header;