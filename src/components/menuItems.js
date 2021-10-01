import React, { Component } from "react";
import {connect} from 'react-redux'
import MenuItem from '../components/menuItem';
import {deleteMenuItem} from '../actions/menuItemActions'
class MenuItems extends Component {

 
    renderItems = () => {

         return this.props.menuItems.map((item) =>  
            <MenuItem key={item.id}  
                name={item.name} 
                body={item.body} 
                img={item.image}
                deleteItem={this.props.deleteMenuItem}
                 />)    
    } 

    render(){
        return ( 
            <ol>
                {this.renderItems()}
            </ol>
        )
    }
}

export default connect(null, {deleteMenuItem})(MenuItems)