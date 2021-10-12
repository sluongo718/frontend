import React, { Component } from 'react'
import entree from '../css/entree.css'
class Desserts extends Component {



    render(){
        return(
            <div class="itemList">
                {   this.props.items.map((item) =>{
                        if(item.category_type === "dessert"){
                            return(
                                <li key={item.id}>
                                    <div class="itemName">{item.name}</div>
                                    <br></br>
                                    <div class="itemBody">{item.body}</div>
                                    <br></br>
                                    <div class="itemPic" ><img width="500" src={item.image}></img></div>
                                    <br></br>
                                </li>
                            )
                        }
                    })
                }
            </div>
        )
    }
}

export default Desserts