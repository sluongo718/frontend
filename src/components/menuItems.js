import React, { Component } from "react";

import MenuItem from '../components/menuItem';

class MenuItems extends Component {

 
    renderItems = () => {
        console.log(" MenuItemsView", this.props.menuItems)
         return this.props.menuItems.map((item, id) =>  <MenuItem key={id} name={item.name} body={item.body} />)    
    } 

    render(){
        return ( 
            <ol>
                {this.renderItems()}
            </ol>
        )
    }
}

export default MenuItems