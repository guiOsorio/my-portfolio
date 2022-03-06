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
                <div className='projects-top'>
                    <h3 className='projects-title'>Software / Web Development</h3>
                    <div className='projects-category'>
                        <div className='webdev-project card'>
                            <div className='front scheduling-img'>
                                <h4>Scheduling App</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: Python (Flask) + SQL (PostgreSQL) + AWS (for automated emails) <br />
                                &rarr; Scheduling platform for tennis clubs</p>
                                <p className='link-center'>
                                    <a href='https://github.com/guiOsorio/Scheduling-Demo' target='_blank'>Github repository</a>
                                </p>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                        <div className='webdev-project card'>
                            <div className='front trivia-img'>
                                <h4>CS50 C++ Trivia</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: C++ <br />
                                &rarr; Command-line trivia game based on Harvard's CS50 online course</p>
                                <p className='link-center'>
                                    <a href='https://github.com/guiOsorio/CS50-Trivia' target='_blank'>Github repository</a>
                                </p>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                        <div className='webdev-project card'>
                            <div className='front acmproject-img'>
                                <h4>ACM Website</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: Python (Django) + JavaScript (React) <br />
                                &rarr; Main contributor on design and implementation</p>
                                <a href='https://github.com/usd-cs/acm-website' target='_blank'>Github repository</a> 
                                <a href='http://usd-acm-website.herokuapp.com/' target='_blank' className='link-right'>Deployed project</a> <br/>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                        <div className='webdev-project card'>
                            <div className='front financeproject-img'>
                                <h4>Finance Stock Displayer</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: Python (Flask) + SQL (SQLite) + independent API <br />
                                &rarr; Platform to simulate stock market transactions</p>
                                <a href='https://github.com/guiOsorio/Finance' target='_blank'>Github repository</a> 
                                <a href='https://gui-finance.herokuapp.com/login' target='_blank' className='link-right'>Deployed project</a> <br/>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                        <div className='webdev-project card'>
                            <div className='front recipes-img'>
                                <h4>Recipes Platform</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: JavaScript (React) + independent API <br />
                                &rarr; My 1st web dev project</p>
                                <a href='https://github.com/guiOsorio/Gui-Recipes' target='_blank'>Github repository</a> 
                                <a href='https://gui-recipes.herokuapp.com/' target='_blank' className='link-right'>Deployed project</a> <br/>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                        <div className='webdev-project card'>
                            <div className='front algos-img'>
                                <h4>JS Algorithms</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: JavaScript <br />
                                &rarr; Implementation of different algorithms on a web page</p>
                                <a href='https://github.com/guiOsorio/JS-Algos' target='_blank'>Github repository</a> 
                                <a href='https://guiosorio.github.io/JS-Algos/' target='_blank' className='link-right'>Deployed project</a> <br/>
                                <p className='link-center'>
                                    <a href='#'>Project's page</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects-bottom'>
                    <h3 className='projects-title'>Data Analytics</h3>
                    <div className='projects-category'>
                        <div className='data-project card'>
                            <div className='front covid-img'>
                                <h4>Covid Vaccine Tweets Analysis</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: R (ggplot, dplyr) + SQL (sqldf in R) <br/>
                                &rarr; Data preprocessing followed by data cleaning and visualizations</p>
                                <p className='link-center'>
                                    <a href='https://github.com/guiOsorio/Covid-Vaccine-Tweets-Analysis' target='_blank'>Github repository</a>
                                </p>
                                <p className='link-center'>
                                    <a href='#' target='_blank'>Project's page</a>
                                </p>                    
                            </div>
                        </div>
                        <div className='data-project card'>
                            <div className='front tenniscourt-img'>
                                <h4>Tennis Data Analysis</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: Python + R (ggplot, dplyr) <br/>
                                &rarr; Data scrapping from ATP.com followed by data analysis</p>
                                <p className='link-center'>
                                    <a href='https://github.com/guiOsorio/ATP-Data-Analysis'>Github repository</a>
                                </p>
                                <p className='link-center'>
                                    <a href='#' target='_blank'>Project's page</a>
                                </p> 
                            </div>
                        </div>
                        <div className='data-project card'>
                            <div className='front teasles-img'>
                                <h4>Small Business Database Design</h4>
                            </div>
                            <div className='back'>
                                <p>&rarr; Technologies used: SQL <br/>
                                &rarr; Final project for the class 'Database Design and Business Intelligence Implementation'</p>
                                <p className='link-center'>
                                    <a href='https://github.com/guiOsorio/ATP-Data-Analysis'>Github repository</a>
                                </p>
                                <p className='link-center'>
                                    <a href='#' target='_blank'>Project's page</a>
                                </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Projects;