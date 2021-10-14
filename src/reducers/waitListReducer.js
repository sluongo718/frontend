export default function waitListReducer(state = {waitList: []}, action){
    switch(action.type){

        case "GET_WAITLIST":
            return {
                state,
                waitList: action.payload
            }

            case "ADD_PARTY":
            return {
                ...state, waitList: [...state.waitList, action.payload]
            }
            default: return state
    }
}