import React from "react";
import {connect} from 'react-redux'
import {deleteMenuItem} from '../actions/menuItemActions'

const MenuItem = (item) => {
    console.log("single item", item)
    

    return (
       
        <div>menu item  
            <li class="itemList">
                {item.name}
                <br></br>
                {item.body}
                <br></br>
                <img src={item.img} />
         
            </li>
        </div>
        
    )
}

export default (MenuItem)