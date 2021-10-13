import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import React, { Component } from "react";

import menuItemForm from './components/menuItemForm'
import MenuContainer from './containers/menuContainer'
import MenuItems from "./components/menuItems"
import MenuItem from "./components/menuItem"
import homePage from "./components/homePage";
import Nav from "./components/nav";
import menuContainer from './containers/menuContainer';
import WaitListContainer from './containers/waitListContainer'
import Entrees from "./components/entrees";





class App extends Component {
  render(){
    return (
      <div > 
        <Nav />
        <MenuContainer/>
        <WaitListContainer/>
          <Switch>
          <Route exact path="/" component={homePage} />
          {/* <Route exact path="/menuItems" render={(props) => <MenuItems menuItems={this.props.menuItems} /> }  />
          <Route exact path="/entrees" render={(props) => <Entrees  items={this.props.menuItems} />} /> */}
          </Switch>
      </div>
    );
  }

}

// const mapStateToProps = state => {
//   console.log("global state", state.menuReducer.menuItems)
//   return {
//       menuItems: state.menuReducer.menuItems
//   }
// }

export default connect(null)(App)
