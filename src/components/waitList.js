import React, { Component } from "react";
import {connect} from 'react-redux'
import {deleteParty} from '../actions/menuItemActions'

class WaitList extends Component {


    handleclick = (party) => {
        this.props.deleteParty(party.id)
    }

    render(){
        return <div>
           {this.props.waitList.map((party) =>(
               <li key={party.id}>
                   {party.name} <button id={party.id} onClick={() => this.handleclick(party) } >Delete Party</button>
               </li>
           ))}
        </div>
    }

}

export default connect(null, {deleteParty})(WaitList) 