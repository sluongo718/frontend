export default function (state = {menuItems: []}, action) {
    
    switch(action.type) {
        case "ADD_MENUITEM":
            return {
                state, menuItems: action.payload
            }
    }
}