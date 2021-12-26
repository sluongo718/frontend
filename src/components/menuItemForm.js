import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMenuItem} from '../actions/menuItemActions'
import menuForm from '../css/menuForm.css'

class MenuItemForm extends Component {
    

    state = {
        name: "",
        body: "",
        image: "",
        category_type: "",
        subcategory_type: ""
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
            image: "",
            category_type: "",
            subcategory_type: ""
        })
    }

    render(){ 
        return (
            <div id="mainDiv">
                <h1 id="title">Menu Form</h1>
                <form id="menuForm" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder="Enter Menu Item"
                    />
                    <br></br>
                    <textarea
                        type="text"
                        name="body"
                        value={this.state.body}
                        onChange={this.handleChange} 
                        placeholder="Description"
                        rows="6" cols="50"
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
                    <select value={this.state.category_type} name="category_type" onChange={this.handleChange} >
                    <option value="">select category</option>
                        <option value="appetizer">Appetizers</option>
                        <option value="entree">Entree</option>
                        <option value="dessert">Dessert</option>
                    </select>
                    <br></br>
                    <select value={this.state.subcategory_type} name="subcategory_type" onChange={this.handleChange} >
                    <option value="">select Subcategory</option>
                        <option value="protien">protien</option>
                        <option value="fish">fish</option>
                        <option value="shellfish">shellfish</option>
                        <option value="pasta">pasta</option>
                        <option value="sandwich">sandwich</option>
                        <option value="other">other</option>
                    </select>
                    <br></br>
                    <input type="submit" />

                </form>
            </div>
        )
    }

}

export default connect(null, {addMenuItem})(MenuItemForm)