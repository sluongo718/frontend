import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reviewForm from '../components/reviewForm'

class WaitListContainer extends Component {
    render(){
        return <div>
                <Switch>
                    <Route exact path="reviewForm" component={reviewForm} />
                </Switch>
        </div>
    }
}

export default WaitListContainer