import React, { Component } from "react";
import {connect} from 'react-redux'
import MenuItem from '../components/menuItem';
import {getMenuItems,deleteMenuItem} from '../actions/menuItemActions'
import itemList from '../css/itemList.css'
import { Link } from "react-router-dom";
import LikeButton from '../components/likeButton'


class MenuItems extends Component {

    state = {
        searchTerm: '',
      }

      handleSearch = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }

    handleclick = (item) => {
        this.props.deleteMenuItem(item.id);
    }

    render(){

        let showItems = this.props.menuItems; 

        if(this.state.searchTerm !== ""){
          
            showItems =  [...this.props.menuItems].filter((item) =>
              item.name.includes(this.state.searchTerm)
            ) ?? [];
          }

        return ( 
            <div className="list">  

                    <input 
                    placeholder="search"
                    name="searchTerm"
                    type="text"
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    />

                {showItems.map((item) =>(
                    <li  key={item.id}>
                        <Link to={`/menuItem/${item.id}`} >{item.name}</Link>
                        <p>{item.body}</p>
                        <img src={item.image}></img>
                        <button id={item.id} onClick={() => this.handleclick(item)}>delete</button>
                        <LikeButton item={item}/>
                    </li>
                ))}
            </div>
        )
    }
}

export default connect(null, {deleteMenuItem})(MenuItems)

//like button for each item
//make a button
// make a function to handle that button
// make a local state to handle likes on each one

