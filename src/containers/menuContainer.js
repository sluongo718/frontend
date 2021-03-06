import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import menuItemForm from "../components/menuItemForm";
import MenuItems from "../components/menuItems";
import MenuItem from "../components/menuItem";
import {getMenuItems} from "../actions/menuItemActions";
import homePage from "../components/homePage";
import Entrees from "../components/entrees";
import Appetizer from "../components/appetizers";
import Desserts from "../components/desserts"





class MenuItemContainer extends Component {

    componentDidMount() {
  
        this.props.getMenuItems();
    }
     

    render(){ 
        return (
            <div>
                <Switch>
                    <Route  exact path="/menuForm" component={menuItemForm} />
                    {/* <Route exact path="/menuForm" render={(props) => <MenuItemForm menuItems={this.props.menuItems} /> }  /> */}
                    <Route exact path="/menuItems" render={(props) => <MenuItems {...props} menuItems={this.props.menuItems} /> }  />
                    <Route exact path="/menuItem/:id" render={(routerProps) => <MenuItem {...routerProps} items={this.props.menuItems} /> } />
                    <Route exact path="/entrees" render={(props) => <Entrees {...props} items={this.props.menuItems} />} />
                    <Route exact path="/appetizers" render={(props) => <Appetizer {...props} items={this.props.menuItems} />} />
                    <Route exact path="/desserts" render={(props) => <Desserts {...props} items={this.props.menuItems} />} />
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        menuItems: state.menuReducer.menuItems
    }
}

export default connect(mapStateToProps, {getMenuItems})(MenuItemContainer)