import menuItemForm from "../components/menuItemForm"

export const getMenuItems = () => {
  
    return (dispatch) => {
        fetch('http://localhost:3000/menu_items')
        .then(res => res.json())
        .then(menuItems => dispatch({type: "GET_MENUITEMS", payload:   menuItems}))
       
    }
}

export const addMenuItem = (menuItem) => {
    
    return (dispatch) => {
        fetch('http://localhost:3000/menu_items', {
            method: "POST",
            body: JSON.stringify(menuItem),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(menuItem => dispatch({type: "ADD_ITEM", payload: menuItem}))

    }
}
