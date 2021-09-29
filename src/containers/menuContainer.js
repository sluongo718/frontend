import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import menuItemForm from "../components/menuItemForm";
import MenuItems from "../components/menuItems"
import MenuItem from "../components/menuItem"
import {getMenuItems} from "../actions/menuItemActions"


class MenuItemContainer extends Component {

    componentDidMount() {
        this.props.getMenuItems();
    }
     

    render(){ 
        return (
            <div>
                MenuContainer
                <MenuItems menuItems={this.props.menuItems} />
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