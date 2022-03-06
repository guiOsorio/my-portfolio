import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
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
                    </Switch>
                </Router>
                <Footer />
            </div>
        )
    }
}