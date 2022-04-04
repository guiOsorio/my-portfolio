import React, { Component } from 'react';
import './styles.css';

import VisualizationPic from '../../assets/Visualization_pic.png';
import FinancePic from '../../assets/Finance_pic.png';
import LecturePic from '../../assets/Lecture_pic.png';
import SQLPic from '../../assets/SQL_pic.png';
import CSPic from '../../assets/CS_pic.png';
import WebDevPic from '../../assets/WebDev_pic.png';

// Info to include: Overall GPA of 3.76; Major in Finance and Double-Minor in ITMG and Business Analytics
    // Relevant classes (projects / skills learned)
    // Relevant cerificates / online courses

    // CLASSES TO INCLUDE:
        // - FINA 408 - Financial Statements Analysis (in-depth analysis of companies' financial statements in Excel, culminating with a detailed valuation of Lululemon)
        // - FINA 409 - Financial Modelling & Analysis (advanced use of Excel for financial modelling and analysis)
        // - ECON 216 - Stats for Business & Economics (familiarity with statistics concepts and use of Excel for statistics and Tableau for visualizations)
        // - BUAN 370 - Descriptive Analytics & Data Management (big data concepts, along as structuring, preprocessing, visualization and cleaning parts of the analytics process in R and SQL)
        // - BUAN 371 - Analytical Decision Modelling (optimization techniques in Excel)
        // - BUAN 390 - Business Analytics Strategy (visualization in Python and Tableau, Regression analysis and Machine Learning in Python)
        // - ITMG 320 - Database Design and Business Intelligence Implementation (design and structuring database concepts and practice in SQL)
        // - MGMT 497 - Strategic Management (consulting, in-depth understanding of the decisions and strategies of businesses by analyzing case studies)
        
    
    // CERTIFICATES / COURSES TO INCLUDE (check email for certificates of completion):
        // - Udemy Tableau
        //     - https://www.udemy.com/course/tableau10/
        // - Udemy Statistics
        //     - https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/
        // - Udemy MySQL
        //     - https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/
        // - Swirl R modules
        // - Udemy Python
        //     - https://www.udemy.com/course/the-modern-python3-bootcamp/
        // - Udemy C/C++
        //     - https://www.udemy.com/course/beginning-c-plus-plus-programming/
        //     - https://github.com/guiOsorio/CPP-Practice
        //     - https://github.com/guiOsorio/C-CPP-DataStructs
        // - CS50
        //     - https://cs50.harvard.edu/x/2022/syllabus/
        //     - https://github.com/guiOsorio/CS50
        // - Udemy WebDev
        //     - https://www.udemy.com/course/the-web-developer-bootcamp/
        // - Udemy Advanced CSS
        //     - https://www.udemy.com/course/advanced-css-and-sass/

class Education extends Component {
    state = {  } 
    render() { 
        return (
            <div id='education' className="section__education">
                <h2>EDUCATION</h2>
                <div className='education-formal'>
                    <h3>Formal Education</h3>
                    <div className='education-formal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={VisualizationPic} alt='Visualizations' />
                            </div>
                        </div>
                        <div className='box-right'>
                            <h5 className='education__box-title'>BUSINESS ANALYTICS</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Stats for Business and Economics</i> - Familiarity with statistics concepts and use of Excel for statistics and Tableau for visualizations.
                                </p>
                                <p>
                                    <i>Descriptive Analytics and Data Management</i> - Big data concepts, along as structuring, preprocessing, visualization and cleaning parts of the analytics process in R and SQL.
                                </p>
                                <p>
                                    <i>Analytical Decision Modelling</i> - Optimization techniques in Excel.
                                </p>
                                <p>
                                    <i>Business Analytics Strategy</i> - Visualization in Python and Tableau, Regression analysis and Machine Learning in Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='education-formal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={FinancePic} alt='Dollar Bills' />
                            </div>
                        </div>
                        <div className='box-right'>
                            <h5 className='education__box-title'>FINANCE</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Financial Statements Analysis</i> - In-depth analysis of companies' financial statements in Excel, culminating with a detailed valuation of Lululemon.
                                </p>
                                <p>
                                    <i>Financial Modelling and Analysis</i> - Advanced use of Excel for financial modelling and analysis.
                                </p>
                                <p>
                                    I have learned valuable skills in my Finance degree. I deepened my understanding of Microsoft Excel, being able to effectively
                                    model and analyze data using the software. I learned how to analyze businesses and understand what makes each
                                    venture successful, and what causes some to fail. Additionally, by analyzing company's financial statements, I got a better
                                    understanding on how to interpret these documents.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='education-formal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={LecturePic} alt='Lecture' />
                            </div>
                        </div>
                        <div className='box-right other'>
                            <h5 className='education__box-title'>OTHER NOTEWORTHY</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Database Design and Business Intelligence Implementation</i> - design and structuring database concepts and practice in SQL.
                                </p>
                                <p>
                                    <i>Strategic Management</i> - consulting, in-depth understanding of the decisions and strategies of businesses by analyzing case studies.
                                </p>
                                <p>
                                    <i>Global Purchase and Supply Management</i> - understanding of how products become a reality, how companies gather the parts necessary
                                    to build a product for which they can profit from. 
                                </p>
                                <p>
                                    <i>Eletronic Commerce</i> - analysis of how businesses models have changed with the expansion of the Internet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='education-informal'>
                    <h3>Certificates / Additional Courses</h3>
                    <div className='education-informal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={SQLPic} alt='SQL pic' />
                            </div>
                        </div>
                        <div className='box-right'>
                            <h5 className='education__box-title'>ANALYTICS SKILLS</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Udemy Tableau</i> - creation of visualizations in Tableau. <br />
                                    <a href='https://www.udemy.com/course/tableau10/'>Syllabus</a>
                                </p>
                                <p>
                                    <i>Udemy Statistics</i> - necessary statistical knowledge for analytics. <br />
                                    <a href='https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/'>Syllabus</a> 
                                </p>
                                <p>
                                    <i>Udemy MySQL</i> - SQL concepts and practical use. <br />
                                    <a href='https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/'>Syllabus</a>
                                </p>
                                <p>
                                    <i>Swirl R modules</i> - introduction to R capabilities and different packages to explore data.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='education-informal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={CSPic} alt='Laptop' />
                            </div>
                        </div>
                        <div className='box-right'>
                            <h5 className='education__box-title'>PROGRAMMING CONCEPTS</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Udemy Python</i> - Python main concepts and practical use. <br />
                                    <a href='https://www.udemy.com/course/the-modern-python3-bootcamp/'>Syllabus</a> 
                                </p>
                                <p>
                                    <i>Udemy C/C++</i> - Basics of C and C++ syntax and how it works. <br />
                                    <a href='https://www.udemy.com/course/beginning-c-plus-plus-programming/'>Syllabus</a> |
                                    <a href='https://github.com/guiOsorio/CPP-Practice'>Practical work 1</a> |
                                    <a href='https://github.com/guiOsorio/C-CPP-DataStructs'>Practical work 2</a> 
                                </p>
                                <p>
                                    <i>CS50</i> - introduction to core computer science concepts and programming languages. <br />
                                    <a href='https://cs50.harvard.edu/x/2022/syllabus/'>Syllabus</a> |
                                    <a href='https://github.com/guiOsorio/CS50'>Class projects</a>
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className='education-informal__box'>
                        <div className='box-left'>
                            <div className='education__box-img'>
                                <img src={WebDevPic} alt='Pretty webdev' />
                            </div>
                        </div>
                        <div className='box-right'>
                            <h5 className='education__box-title'>WEB DEVELOPMENT</h5>
                            <div className='education__box-text'>
                                <p>
                                    <i>Udemy WebDev</i> - introduction to many concepts related to web development such as HTML, CSS, Node.js, SQL, Javascript, etc. As well
                                    as code-along projects to learn throughout the way. <br />
                                    <a href='https://www.udemy.com/course/the-web-developer-bootcamp/'>Syllabus</a> |
                                    <a href='https://github.com/guiOsorio/yelp-camp'>Final code-along project</a>
                                </p>
                                <p>
                                    <i>Udemy Advanced CSS</i> - intermediate knowledge on HTML and CSS. Designing concepts to make websites aesthetically pleasing. <br />
                                    <a href='https://www.udemy.com/course/advanced-css-and-sass/'>Syllabus</a> |
                                    <a href='https://github.com/guiOsorio/Trillo'>Project 1</a> |
                                    <a href='https://github.com/guiOsorio/Natours'>Project 2</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Education;