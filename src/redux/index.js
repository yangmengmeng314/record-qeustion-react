import { createStore, combineReducers } from 'redux'
const initailUser = {};
const userReducer = (state = initailUser, action) => {
    switch(action.type){
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return {};
        default:
            return state
    }
}

const reducer = combineReducers({
    user:userReducer
})

export const store = createStore(reducer)