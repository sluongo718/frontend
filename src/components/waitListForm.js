import React, { Component } from "react";
import {connect} from 'react-redux'

class WaitListForm extends Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return <div>
            <form>
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

export default WaitListForm