
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

export const deleteMenuItem = (id) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/menu_items/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => dispatch({type: "DELETE_ITEM", payload: id}))
    }
}

export const addParty = (party) => {
    console.log("addparty", party)
    return (dispatch) => {
        fetch('http://localhost:3000/wait_lists', {
            method: "POST",
            body: JSON.stringify(party),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(party => dispatch({type: "ADD_PARTY", payload: party}))

    }
}

export const getWaitList = () => {
  
    return (dispatch) => {
        fetch('http://localhost:3000/wait_lists')
        .then(res => res.json())
        .then(waitList => dispatch({type: "GET_WAITLIST", payload: waitList}))
       
    }
}

export const deleteParty = (id) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/wait_lists/${id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => dispatch({type: "DELETE_PARTY", payload: id}))
    }
}
