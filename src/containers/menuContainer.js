import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import menuItemForm from "../components/menuItemForm";

class MenuItemContainer extends Component {

    render(){ 
        return (
            <div>
                <Switch>
                    <Route path="/menuForm" component={menuItemForm} />
                </Switch>
            </div>
        )
    }

}

export default MenuItemContainer