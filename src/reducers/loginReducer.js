import { initialState } from './initialState';

export const loginReducer = (state = initialState,action) =>{
    let newState = {...state};

    switch(action.type){
        case "LOGGEDIN":
                newState.loggedIn = action.payload;
                return newState;
        default :
             return state;
    }
}