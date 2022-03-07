import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
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
import USDTennis from './Project_Pages/Tennis_Team';
import ACMLeadership from './Project_Pages/ACM_Leadership';
import Footer from './Footer';

export default class Routes extends Component {
    state = { }
    render() {
        return (
            <div className='app'>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Homepage />
                        </Route>
                        <Route exact path='/scheduling'>
                            <Scheduling />
                        </Route>
                        <Route exact path='/trivia'>
                            <Trivia />
                        </Route>
                        <Route exact path='/trivia'>
                            <Trivia />
                        </Route>
                        <Route exact path='/acm_website'>
                            <ACMWebsite />
                        </Route>
                        <Route exact path='/stock_displayer'>
                            <StockDisplayer />
                        </Route>
                        <Route exact path='/gui_recipes'>
                            <GuiRecipes />
                        </Route>
                        <Route exact path='/js_algos'>
                            <JSAlgos />
                        </Route>
                        <Route exact path='/covid_tweets'>
                            <CovidTweets />
                        </Route>
                        <Route exact path='/tennis_analysis'>
                            <TennisAnalysis />
                        </Route>
                        <Route exact path='/teasles'>
                            <Teasles />
                        </Route>
                        <Route exact path='/tennis_team'>
                            <USDTennis />
                        </Route>
                        <Route exact path='/ACM_Experience'>
                            <ACMLeadership />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}