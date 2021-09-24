export default function (state = {menuItems: []}, action) {
        console.log(action)
    switch(action.type) {

        case "GET_MENUITEMS":
            return {
                state,
                menuItems: action.payload
            }

        case "ADD_ITEM":
            return {
                ...state, menuItems: [...state.menuItems, action.payload]
            }

        default: 
            return state
    }
}