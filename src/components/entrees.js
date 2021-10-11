import React, { Component } from 'react'
import entree from '../css/entree.css'

class Entrees extends Component {



    render(){
        return(
            <div id="itemList">
                {   this.props.items.map((item) =>{
                        if(item.category_type === "entree"){
                            return(
                                <li key={item.id}>
                                    <div id="itemName">{item.name}</div>
                                    <br></br>
                                    <div id="itemBody">{item.body}</div>
                                    <br></br>
                                    <div id="itemPic" ><img width="500" src={item.image}></img></div>
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

export default Entrees