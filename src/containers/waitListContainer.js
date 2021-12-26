import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WaitList from '../components/waitList'
import WaitListForm from '../components/waitListForm'
import {getWaitList} from "../actions/menuItemActions";


class WaitListContainer extends Component {

  componentDidMount() {
    this.props.getWaitList()
  }

    render(){
        return <div>
                <Switch>
 
                  <Route exact path="/waitlist"  render={(props) => <WaitList waitList={this.props.waitList} />} />
                  <Route exact path="/waitlistForm"  render={(props) => <WaitListForm waitList={this.props.waitList} />} />
                </Switch>
        </div>
    }
}

const mapStateToProps = (state) => {
  return {
    waitList: state.waitListReducer.waitList
  }
}

export default connect(mapStateToProps, {getWaitList} )(WaitListContainer)