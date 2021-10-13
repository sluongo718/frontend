export default function menuReducer(state = {menuItems: []}, action) {
        
    switch(action.type) {
     
        case "GET_MENUITEMS":
            console.log("GET menu items", state, action)
            return {
                state,
                menuItems: action.payload
            }

        case "ADD_ITEM":
            return {
                ...state, menuItems: [...state.menuItems, action.payload]
            }

            case "DELETE_ITEM": 
            return {
                ...state, menuItems: [...state.menuItems.filter((item) => item.id !== action.payload)]
            }

        // case "ADD_PARTY":
        //     debugger
        //     return {
             
        //         ...state, waitList: [...state.waitList, action.payload]
        //     }

        default: 
            return state
    }
}
