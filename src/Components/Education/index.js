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
            <div id='education' className="section__education screen-size332">
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
                                    Stats for Business and Economics - Familiarity with statistics concepts and use of Excel for statistics and Tableau for visualizations.
                                </p>
                                <p>
                                    Descriptive Analytics and Data Management - Big data concepts, along as structuring, preprocessing, visualization and cleaning parts of the analytics process in R and SQL.
                                </p>
                                <p>
                                    Analytical Decision Modelling - Optimization techniques in Excel.
                                </p>
                                <p>
                                    Business Analytics Strategy - Visualization in Python and Tableau, Regression analysis and Machine Learning in Python.
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
                                    Financial Statements Analysis - In-depth analysis of companies' financial statements in Excel, culminating with a detailed valuation of Lululemon.
                                </p>
                                <p>
                                    Financial Modelling and Analysis - Advanced use of Excel for financial modelling and analysis.
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
                        <div className='box-right'>
                            <h5 className='education__box-title'>OTHER NOTEWORTHY</h5>
                            <div className='education__box-text'>
                                <p>
                                    Database Design and Business Intelligence Implementation - design and structuring database concepts and practice in SQL.
                                </p>
                                <p>
                                    Strategic Management - consulting, in-depth understanding of the decisions and strategies of businesses by analyzing case studies.
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
                                    Udemy Tableau - https://www.udemy.com/course/tableau10/
                                </p>
                                <p>
                                    Udemy Statistics - https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/
                                </p>
                                <p>
                                    UdemyMySQL - https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/
                                </p>
                                <p>
                                    Swirl R modules
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
                            <h5 className='education__box-title'>COMPUTER SCIENCE CONCEPTS / TECHNOLOGIES</h5>
                            <div className='education__box-text'>
                                <p>
                                    Udemy Python - https://www.udemy.com/course/the-modern-python3-bootcamp/
                                </p>
                                <p>
                                    Udemy C/C++ - https://www.udemy.com/course/beginning-c-plus-plus-programming/
                                    https://github.com/guiOsorio/CPP-Practice 
                                    https://github.com/guiOsorio/C-CPP-DataStructs
                                </p>
                                <p>
                                    CS50 - https://cs50.harvard.edu/x/2022/syllabus/
                                    https://github.com/guiOsorio/CS50
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
                                    Udemy WebDev - https://www.udemy.com/course/the-web-developer-bootcamp/
                                </p>
                                <p>
                                    Udemy Advanced CSS - https://www.udemy.com/course/advanced-css-and-sass/
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