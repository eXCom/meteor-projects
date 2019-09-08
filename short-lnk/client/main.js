import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/links" component={Link}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});