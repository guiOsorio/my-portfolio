import React, { Component } from 'react';
import './styles.css';

// Have the left half be on software / web development and the right half to be on data analysis
// Have each project be associated with an image (from unsplash or image of the project itself) and title, and provide link to project page as well as technologies used
    // use 'CSS image hover effects' animation from this page https://www.sliderrevolution.com/resources/css-image-effects/
    // (later on, develop an individual page with detailed info on each project)
// Software / Web development projects list (6):
    // - Recipes platform in react (my 1st web dev project) (fetching APIs) (WeDe)
        // - https://github.com/guiOsorio/Gui-Recipes
        // - https://gui-recipes.herokuapp.com/
    // - JS Algorithms using JavaScript (implementation of different algorithms on a web page) (WeDe)
        // - https://github.com/guiOsorio/JS-Algos
        // - https://guiosorio.github.io/JS-Algos/
    // - Finance stock displayer in Python (Flask) and SQL (SQLite) (working with APIs to create a platform to simulate stock market transactions) (WeDe)
        // - https://github.com/guiOsorio/Finance
        //  - https://gui-finance.herokuapp.com/login 
    // - ACM Website using React (main contributor on design and implementation of website) (WeDe)
        // - https://github.com/usd-cs/acm-website
        // - http://usd-acm-website.herokuapp.com/ 
    // - CS50 Trivia game using C++ (simple command-line trivia game based on Harvard's CS50 online course) (WeDe)
        // - https://github.com/guiOsorio/CS50-Trivia
    // - Scheduling app using Python (Flask) and SQL (PostgreSQL), as well as email automation using AWS (scheduling platform for tennis clubs) (WeDe)
        // - https://github.com/guiOsorio/Scheduling-Demo
// Data analysis projects list (3):
    // - Teasles database design for a small business with SQL (ITMG 320 - Database Design and Business Intelligence Implementation) (DaAn)
        // - https://github.com/guiOsorio/ITMG_320/tree/master/Final_Project
    // - Covid vaccine tweets analysis with R and SQL (BUAN 370 - Descriptive Analytics & Database Management) (DaAn)
        // - https://github.com/guiOsorio/Covid-Vaccine-Tweets-Analysis
    // - ATP Data Analysis in Python (scrapping + database structuring) and R (preprocessing + visualization + cleaning + data transformation + PCA + clustering + regression) (DaAn)
        // - https://github.com/guiOsorio/ATP-Data-Analysis
    

class Projects extends Component {
    state = {  } 
    render() { 
        return (
            <div className="section__projects screen-size2">
                <h2>PROJECTS</h2>
                <div className='projects-left'>
                    <h3 className='projects-title'>Software / Web Development</h3>
                    <div className='webdev-project card'>
                        <div className='front scheduling-img'>
                            <h4>Scheduling App</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Flask) + SQL (PostgreSQL) + AWS (for automated emails) <br />Scheduling platform for tennis clubs</p>
                            <a href='https://github.com/guiOsorio/Scheduling-Demo' target='_blank'>Github repository</a> <br />
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='webdev-project card'>
                        <div className='front trivia-img'>
                            <h4>CS50 C++ Trivia</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: C++ <br />Command-line trivia game based on Harvard's CS50 online course</p>
                            <a href='https://github.com/guiOsorio/CS50-Trivia' target='_blank'>Github repository</a> <br />
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='webdev-project card'>
                        <div className='front acmproject-front'>
                            <h4>ACM Website</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Django) + JavaScript (React) <br />Main contributor on design and implementation</p>
                            <a href='https://github.com/usd-cs/acm-website' target='_blank'>Github repository</a> <a href='http://usd-acm-website.herokuapp.com/' target='_blank'>Deployed project</a> <br/>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='webdev-project card'>
                        <div className='front finance-front'>
                            <h4>Finance Stock Displayer</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Flask) + SQL (SQLite) + independent API <br />- platform to simulate stock market transactions</p>
                            <a href='https://github.com/guiOsorio/Finance' target='_blank'>Github repository</a> <a href='https://gui-finance.herokuapp.com/login' target='_blank'>Deployed project</a> <br/>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='webdev-project card'>
                        <div className='front recipes-front'>
                            <h4>Recipes Platform</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: JavaScript (React) + independent API <br />- my 1st web dev project</p>
                            <a href='https://github.com/guiOsorio/Gui-Recipes' target='_blank'>Github repository</a> <a href='https://gui-recipes.herokuapp.com/' target='_blank'>Deployed project</a> <br/>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='webdev-project card'>
                        <div className='front algos-front'>
                            <h4>JS Algorithms</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: JavaScript <br />- implementation of different algorithms on a web page</p>
                            <a href='https://github.com/guiOsorio/JS-Algos' target='_blank'>Github repository</a> <a href='https://guiosorio.github.io/JS-Algos/' target='_blank'>Deployed project</a> <br/>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                </div>
                <div className='projects-right'>
                <h3 className='projects-title'>Data Analytics</h3>
                    <div className='data-project card'>
                        <div className='front scheduling-front'>
                            <h4>Scheduling App</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Flask) + SQL (PostgreSQL) + AWS (for automated emails)</p>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='data-project card'>
                        <div className='front scheduling-front'>
                            <h4>Scheduling App</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Flask) + SQL (PostgreSQL) + AWS (for automated emails)</p>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                    <div className='data-project card'>
                        <div className='front scheduling-front'>
                            <h4>Scheduling App</h4>
                        </div>
                        <div className='back'>
                            <p>Technologies used: Python (Flask) + SQL (PostgreSQL) + AWS (for automated emails)</p>
                            <a href='#'>Project's page</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Projects;