import React, { Component } from 'react';
import './styles.css';

class Header2 extends Component {
    state = {  } 
    render() { 
        return (
            <div className='app-header'>
                <nav className="nav">
                    <div className="container-fluid nav-links">
                        <a href="/" className="navbar-brand home-link"><span className='black'>HOME</span></a>
                    </div>
                </nav>
            </div>
        );
    }
}
 
export default Header2;