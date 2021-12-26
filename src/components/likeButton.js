import React, { Component } from 'react'
import { connect } from "react-redux";
import {UpdateMenuItem} from "../actions/menuItemActions";
import itemList from '../css/itemList.css'

class LikeButton extends Component {

    state = {
        likes: this.props.item.likes 
    }

    handleLikes = (e) => {
        e.preventDefault()
        this.setState({
                likes: this.state.likes += 1
        })
         this.props.UpdateMenuItem(this.props.item.id, this.state)
    }



    render(){
        return (
            <div >
               <button onClick={this.handleLikes} >Like</button> <p>{this.state.likes}</p>
            </div>
        )
    }

}

export default connect (null, {UpdateMenuItem})(LikeButton)