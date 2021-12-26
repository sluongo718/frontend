import React, { Component } from "react";
import {connect} from 'react-redux'
import {addParty} from '../actions/menuItemActions'
import wait from '../css/wait.css'

class WaitListForm extends Component {

    state = {
        name: ""
    }

    handleChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    waitTime = () => {
        return  this.props.waitList.length * 5
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert("Thank You, your party has been added to the wait!")
        this.props.addParty(this.state)
        this.setState({
            name: ""
        })
    }





    render(){
        return <div class="wait" >

            <h1>Add party to Wait List</h1>

            <form id="waitForm" onSubmit={this.handleSubmit}>
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
            <h2>Wait Time {this.waitTime()} Minutes!</h2> 
        </div>
    }

}

export default connect(null, {addParty})(WaitListForm)