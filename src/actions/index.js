// import users from '../users';
export const SELECT_USER = 'SELECT_USER'; 
export const SET_USERS = 'SET_USERS'; 
const ROOT_URL = 'https://pictor-api.herokuapp.com/api/v1/users'

export function selectUser(id) {
    const promise = fetch(`https://pictor-api.herokuapp.com/api/v1/users/${id}`)
    .then(response => response.json());
    return {
    type: SELECT_USER,
    payload: promise
    }; 
} 

export function setUsers() {
    
    const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json()); 
    return {
    type: SET_USERS,
    payload: promise
    };
} 


