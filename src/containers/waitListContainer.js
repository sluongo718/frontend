import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WaitList from '../components/waitList'
import waitListForm from '../components/waitListForm'
import {getWaitList} from "../actions/menuItemActions";


class WaitListContainer extends Component {

  componentDidMount() {
    console.log( "waitlist", this.props.getWaitList())
    this.props.getWaitList()
  }

    render(){
        return <div>
                <Switch>
 
                  <Route exact path="/waitlist"  render={(props) => <WaitList waitList={this.props.waitList} />} />
                  <Route exact path="/waitlistForm"  component={waitListForm} />
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