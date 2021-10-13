import React, { Component } from "react";
import {connect} from 'react-redux'
import {addParty} from '../actions/menuItemActions'

class WaitListForm extends Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addParty(this.state)
        this.setState({
            name: ""
        })
    }

    render(){
        return <div>
            <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder="Enter Party Name"
                    />
                    <input
                        type="submit" 
                        value="Add Party"
                    />
            </form>
        </div>
    }

}

export default connect(null, {addParty})(WaitListForm)