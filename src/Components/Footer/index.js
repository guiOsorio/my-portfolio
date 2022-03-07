import React, { Component } from 'react';
import { SiAcm } from "react-icons/si";
import './styles.css';

// Provide contact info (email, phone number, github, linkedin) (check ACM website for design)

class Footer extends Component {
    render() { 
        return (
            <footer id="footer">
                <div class="footer-left">
                    <ul class="footer-list">
                        <li>Email me at gosorio@sandiego.edu</li>
                        <li>Call me at 6197073685</li>
                    </ul>
                </div>
                <div class="footer-center">
                    <ul class="footer-list">
                        <li><a href="https://github.com/guiOsorio" target="_blank">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/guilherme-osorio-089024162/" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
                <div class="footer-right">
                    &copy; Made by G. Osorio
                </div>
            </footer>
        );
    }
}
 
export default Footer;
