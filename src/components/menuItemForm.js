import React, { Component } from 'react'
import {connect} from 'react-redux'

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



    render(){
        return (
            <div>
                <form>
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