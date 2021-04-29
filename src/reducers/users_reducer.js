import { SET_USERS, SELECT_USER, USER_CREATED } from '../actions'

export default function(state = [], action) {
    switch (action.type) {
    case SET_USERS:
        return action.payload;
    case SELECT_USER:
        return [ action.payload ];  
    default:
        return state;
    }
}