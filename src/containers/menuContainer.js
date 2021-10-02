import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import menuItemForm from "../components/menuItemForm";
import MenuItems from "../components/menuItems";
import MenuItem from "../components/menuItem";
import {getMenuItems} from "../actions/menuItemActions";
import homePage from "../components/homePage";
import entrees from "../components/entrees";




class MenuItemContainer extends Component {

    componentDidMount() {
        this.props.getMenuItems();
    }
     

    render(){ 
        return (
            <div>
                MenuContainer
                {/* <MenuItems menuItems={this.props.menuItems} /> */}
                <Switch>
                    <Route exact path="/" component={homePage} />
                    <Route  exact path="/menuForm" component={menuItemForm} />
                    <Route exact path="/menuItems" render={(props) => <MenuItems menuItems={this.props.menuItems} /> }  />
                    <Route exact path="/menuItem/:id" render={(routerProps) => <MenuItem {...routerProps} items={this.props.menuItems} /> } />
                    
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems
    }
}

export default connect(mapStateToProps, {getMenuItems})(MenuItemContainer)