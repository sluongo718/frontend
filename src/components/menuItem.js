import React from "react";


const MenuItem = (item) => {
    
    return (
        <div>menu item  
            <li>{item.name}
                <br></br>
                {item.body}
                <br></br>
                <img src={item.img} />
            </li>
        </div>
        
    )
}

export default MenuItem