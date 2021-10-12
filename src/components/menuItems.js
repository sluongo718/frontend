import React, { Component } from "react";
import {connect} from 'react-redux'
import MenuItem from '../components/menuItem';
import {getMenuItems,deleteMenuItem} from '../actions/menuItemActions'
import itemList from '../css/itemList.css'

class MenuItems extends Component {

 
    // renderItems = () => {

    //      return this.props.menuItems.map((item) =>  
    //         <MenuItem key={item.id}  
    //             name={item.name} 
    //             body={item.body} 
    //             img={item.image}
    //             deleteItem={this.props.deleteMenuItem}
    //         />)    
    // } 


    handleclick = (item) => {
        this.props.deleteMenuItem(item.id);
    }

    render(){
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