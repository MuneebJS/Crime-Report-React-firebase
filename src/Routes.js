import React, { Component } from 'react';
import { Router, IndexRoute, Route, Link, hashHistory, browserHistory, IndexLink } from 'react-router';
import PageNotFound from './components/pageNotFound';
import Home from './components/Home';
import SignUp from './components/signup';
import SignIn from './components/signin';
import Buttons from './components/button'
import Nav from './components/nav'
import CrimeReport from './components/crimeReport'
import ComplaintForm from './components/complaint'
import MissingPersonForm from './components/missingPerson';
import GetCrimeReport from './components/getCrimeReport';
import GetComplaints from './components/getComplaints'
import GetMissingPerson from './components/getMissingPerson'

class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Nav}>
                    <IndexRoute component={SignIn} />
                    <Route path="/home" component={Home}/>
                    <Route path="sign_up" component={SignUp} />
                    <Route path="sign_in" component={SignIn} />
                    <Route path="/crime" component={GetCrimeReport}/>
                    <Route path="/complaint" component={GetComplaints} />
                      <Route path="/missing" component={GetMissingPerson}/>
                    <Route path="/crime_form" component={CrimeReport} />
                      <Route path="/complaint_form" component={ComplaintForm}/>
                    <Route path="/missing_form" component={MissingPersonForm} />
                </Route>
            </Router >
        )
    }
}

export default Routes