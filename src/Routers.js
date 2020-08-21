import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Main from 'pages/Main';
import About from 'pages/About';
import Papertoy from 'pages/Papertoy';
import Book from 'pages/Book';
import Curriculum from 'pages/Curriculum';
import Event from 'pages/Event'
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';
import Toy from 'pages/Toy';
import robitStage from 'pages/robitStage';
import Products from 'pages/Products';
import {AdminContents, AdminLogin} from 'pages/Admin';
import NotFound from 'pages/NotFound';
import withTracker from './withTracker';

const Routers = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={withTracker(Main)}/>
                <Route path="/about" component={withTracker(About)}/>
                <Route path="/papertoy" component={withTracker(Papertoy)}/>
                <Route path="/Products" component={withTracker(Products)}/>
                <Route path="/robitStage" component={withTracker(robitStage)}/>
                <Route path="/Toy" component={withTracker(Toy)}/>
                <Route path="/Book" component={withTracker(Book)}/>
                <Route path="/curriculum" component={withTracker(Curriculum)}/>
                <Route path="/Event" component={withTracker(Event)}/>
                <Route path="/portfolio" component={withTracker(Portfolio)}/>
                <Route path="/contact" component={withTracker(Contact)}/>
                <Route exact path="/admin" component={AdminContents}/>
                <Route path="/admin/register" component={AdminContents}/>
                <Route path="/admin/list" component={AdminContents}/>
                <Route path="/admin/get/index/:index" component={AdminContents}/>
                <Route path="/auth/login" component={AdminLogin}/>
                <Route component={withTracker(NotFound)}/>
            </Switch>
        </React.Fragment>
    );
};

export default withRouter(Routers);
