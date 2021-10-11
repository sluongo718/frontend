import React, { Component } from 'react'
import {connect} from 'react-redux'
import homepagecss from '../css/homepagecss.css'

class HomePage extends Component {

    render(){
        return  <div>
                    <div id="imgDiv">
                        <img id="greeting" src="https://images.getbento.com/JrjINqj8THqZhrpPDbAN_coconuts_logo.png"></img> 
                        <img id="rightImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIm6VTHyZ5jq4rwj2qxMvPLrveOxsLPu6iA&usqp=CAU"></img>
                    </div>
                
                    <div  id="vidGret" >
                        <iframe width="1600" height="615" src="https://www.youtube.com/embed/fApX1QqaW10?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    
                </div>
    }

}

export default HomePage