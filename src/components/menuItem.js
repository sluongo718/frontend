// import React from "react";
import {connect} from 'react-redux'
import {deleteMenuItem} from '../actions/menuItemActions'
import itemList from '../css/itemList.css'
import React, { useState } from 'react';


const MenuItem = (props) => {
    console.log("single item", props.items)

    const [likes, setLikes] = useState(0);

    let item = props.items.filter(mItem => mItem.id == props.match.params.id)[0]

    return (
       
        <div>menu item  
            <li class="list">
                {item.name}
                {item.name}
                {item.name}
                <button>like</button>
         
            </li>
        </div>
        
    )
}

export default (MenuItem)