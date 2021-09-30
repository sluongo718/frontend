import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMenuItem} from '../actions/menuItemActions'

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
                    <select value={this.state.category_type} name="category_type" onChange={this.handleChange} >
                        <option value="appetizer">Appetizers</option>
                        <option value="entree">Entree</option>
                        <option value="dessert">Dessert</option>
                    </select>
                    <br></br>
                    <input type="submit" />

                </form>
            </div>
        )
    }

}

export default connect(null, {addMenuItem})(MenuItemForm)

{/* <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> */}