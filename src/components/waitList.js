import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteParty} from '../actions/menuItemActions'
import wait from '../css/wait.css'

class WaitList extends Component {


    handleclick = (party) => {
        this.props.deleteParty(party.id)
    }

     waitTime = () => {
        return  this.props.waitList.length * 5
    }
 
    render(){
        return <div class="wait" >
           {this.props.waitList.map((party) =>(
               <li key={party.id}>
                   {party.name} <button id={party.id} onClick={() => this.handleclick(party) } >Delete Party</button>
               </li>
           ))}
              <h2>Wait Time {this.waitTime()} Minutes!</h2>  
        </div>
    }

}

export default connect(null, {deleteParty})(WaitList) 