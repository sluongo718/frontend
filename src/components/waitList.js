import React, { Component } from "react";
import {connect} from 'react-redux'

class WaitList extends Component {


    render(){
        return <div>
           {this.props.waitList.map((party) =>(
               <li key={party.id}>
                   {party.name}
               </li>
           ))}
        </div>
    }

}

export default WaitList