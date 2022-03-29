import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Scheduling from './Project_Pages/Scheduling';
import Trivia from './Project_Pages/Trivia';
import ACMWebsite from './Project_Pages/ACM_Website';
import StockDisplayer from './Project_Pages/Stock_Displayer';
import GuiRecipes from './Project_Pages/Gui_Recipes';
import JSAlgos from './Project_Pages/JS_Algos';
import CovidTweets from './Project_Pages/Covid_Tweets';
import TennisAnalysis from './Project_Pages/Tennis_Analysis';
import Teasles from './Project_Pages/Teasles';
import Retail from './Project_Pages/Retail_Analysis';
import Footer from './Footer';

export default class Routesall extends Component {
    state = { }
    render() {
        return (
            <div className='app'>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/scheduling' element={<Scheduling />} />
                        <Route exact path='/trivia' element={<Trivia />} />
                        <Route exact path='/acm_website' element={<ACMWebsite />} />
                        <Route exact path='/stock_displayer' element={<StockDisplayer />} />
                        <Route exact path='/gui_recipes' element={<GuiRecipes />} />
                        <Route exact path='/js_algos' element={<JSAlgos />} />
                        <Route exact path='/covid_tweets' element={<CovidTweets />} />
                        <Route exact path='/tennis_analysis' element={<TennisAnalysis />} />
                        <Route exact path='/teasles' element={<Teasles />} />
                        <Route exact path='/retail' element={<Retail />} />
                    </Routes>
                </Router>
                <Footer />
            </div>
        )
    }
}