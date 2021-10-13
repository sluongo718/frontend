import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import waitList from '../components/waitList'


class WaitListContainer extends Component {
    render(){
        return <div>
                <Switch>
                  <Route exact path="/waitlist"  component={waitList} />
                </Switch>
        </div>
    }
}

export default WaitListContainer