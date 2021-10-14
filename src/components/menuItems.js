import React, { Component } from "react";
import {connect} from 'react-redux'
import MenuItem from '../components/menuItem';
import {getMenuItems,deleteMenuItem} from '../actions/menuItemActions'
import itemList from '../css/itemList.css'

class MenuItems extends Component {

    handleclick = (item) => {
        this.props.deleteMenuItem(item.id);
    }

    render(){
        console.log("menuitems", this.props)
        return ( 
            <div  >
                {this.props.menuItems.map((item) =>(
                    <li class="list" key={item.id}>
                        {item.name}
                        <br></br>
                        {item.body}
                        <br></br>
                        <img src={item.image}></img>
                        <br></br>
                        <button id={item.id} onClick={() => this.handleclick(item)}>delete </button>
                    </li>
                ))}
            </div>
        )
    }
}

export default connect(null, {deleteMenuItem})(MenuItems)