import React, { Component } from 'react';
import './styles.css';

import { Icon } from '@iconify/react';

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
                <h2>EDUCATION + SKILLS</h2>
                <div className='education_boxes'>
                    <div className='education__coursework'>
                        <h4>COURSEWORK</h4>
                        <ul className='nobl pb'>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Stats for Business and Economics</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Descriptive Analytics and Data Management</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Analytical Decision Modelling</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Business Analytics Strategy</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Database Design and Business Intelligence Implementation</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Financial Statements Analysis</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Financial Modelling and Analysis</li>         
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Strategic Management</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Global Purchase and Supply Management</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Eletronic Commerce</li>
                        </ul>
                    </div>
                    <div className='vl'></div>
                    <div className='education__skills'>
                        <h4>TECHNICAL SKILLS</h4>
                        <ul className='nobl pb'>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Python for data analysis (Pandas, NumPy, statsmodels)</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Python for machine learning (sklearn, TensorFlow, FastAI)</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Other programming languages -&gt; R, Javascript, C++</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> SQL (MySQL, MS SQL Server, PostgreSQL)</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Data Visualization (Tableau, Python, R, Excel)</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Statistics concepts</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Data Structures &#38; Algorithms</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Web Development -&gt; HTML/CSS, React, Flask</li>
                            <li><Icon icon="akar-icons:circle-check-fill" color="#7A9282" /> Web Scraping (BeautifulSoup)</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Education;