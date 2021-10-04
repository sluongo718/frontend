import React, { Component } from 'react'

class Appetizer extends Component {



    render(){
        return(
            <div>
                {   this.props.items.map((item) =>{
                        if(item.category_type === "appetizer"){
                            return(
                                <li key={item.id}>
                                    {item.name}
                                    <br></br>
                                    {item.body}
                                    <br></br>
                                    <img src={item.image}></img>
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

export default Appetizer