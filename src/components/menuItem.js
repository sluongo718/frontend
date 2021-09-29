import React from "react";


const MenuItem = (item) => {
    console.log("MenuItem", item)
    
    return (
        <div>menu item  
            <li>{item.name}<br></br>{item.body}</li>
        </div>
        
    )
}

export default MenuItem