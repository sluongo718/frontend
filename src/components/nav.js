import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

const link = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

class Nav extends React.Component {
    render(){
        return <div>
        <NavLink
          to="/"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/menuItems"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
          Menu
        </NavLink>
        <NavLink
          to="/menuForm"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
            Menu Form
        </NavLink>
        <NavLink
          to="/entrees"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
            Entrees
        </NavLink>
        <NavLink
          to="/appetizers"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
            Appetizers
        </NavLink>
        <NavLink
          to="/desserts"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
            Desserts
        </NavLink>
        <NavLink
          to="/waitlist"
  
          exact
    
          style={link}
        
          activeStyle={{
            background: "darkred",
          }}
        >
            Waitlist
        </NavLink>
        </div>
    }
}

export default Nav