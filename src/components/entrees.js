import React, { Component } from 'react'

class Entrees extends Component {



    render(){
        return(
            <div>
                {   this.props.items.map((item) =>{
                        if(item.category_type === "entree"){
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

                {/* {this.props.items.map((item) =>(
                    <li key={item.id}>
                        {item.name}
                        <br></br>
                        {item.body}
                        <br></br>
                        <img src={item.image}></img>
                        <br></br>
                    </li>
                ))} */}
            </div>
        )
    }
}

export default Entrees