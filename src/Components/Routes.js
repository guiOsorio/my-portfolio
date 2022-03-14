import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Header2 from './Header2';
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
import Footer from './Footer';

export default class AllRoutes extends Component {
    state = { }
    render() {
        return (
            <div className='app'>
                <Router>
                    <Routes>
                        <Route exact path='/'>
                            <Header />
                            <Homepage />
                        </Route>
                        <Route exact path='/scheduling'>
                            <Header2 />
                            <Scheduling />
                        </Route>
                        <Route exact path='/trivia'>
                            <Header2 />
                            <Trivia />
                        </Route>
                        <Route exact path='/trivia'>
                            <Header2 />
                            <Trivia />
                        </Route>
                        <Route exact path='/acm_website'>
                            <Header2 />
                            <ACMWebsite />
                        </Route>
                        <Route exact path='/stock_displayer'>
                            <Header2 />
                            <StockDisplayer />
                        </Route>
                        <Route exact path='/gui_recipes'>
                            <Header2 />
                            <GuiRecipes />
                        </Route>
                        <Route exact path='/js_algos'>
                            <Header2 />
                            <JSAlgos />
                        </Route>
                        <Route exact path='/covid_tweets'>
                            <Header2 />
                            <CovidTweets />
                        </Route>
                        <Route exact path='/tennis_analysis'>
                            <Header2 />
                            <TennisAnalysis />
                        </Route>
                        <Route exact path='/teasles'>
                            <Header2 />
                            <Teasles />
                        </Route>
                    </Routes>
                </Router>
                <Footer />
            </div>
        )
    }
}