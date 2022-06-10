import { types } from "../types/types";

export const editReducer = (state = {} , action) => {
    switch (action.type) {
        case types.editUsername:
            return {
                ...state, 
                name: action.payload.displayName
            }
        case types.editEmail: 
            return {
                ...state,
                email: action.payload.email
            }    
        default:
            return state;
    }
}