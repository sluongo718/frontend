import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMenuItem} from '../actions/menuItemActions'

class MenuItemForm extends Component {

    state = {
        name: "",
        body: "",
        image: ""
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
      
        event.preventDefault()
        this.props.addMenuItem(this.state)
        this.setState({
            name: "",
            body: "",
            image: ""
        })
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder="Enter Menu Item"
                    />
                    <br></br>
                    <input
                        type="text"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange} 
                        placeholder="Description"
                    />
                     <br></br>
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange} 
                        placeholder="image"
                    />
                    <br></br>
                    <input type="submit" />

                </form>
            </div>
        )
    }

}

export default connect(null, {addMenuItem})(MenuItemForm)