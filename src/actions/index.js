// import users from '../users';
export const SET_USERS = 'SET_USERS'; 
export const SELECT_USER = 'SELECT_USER'; 


export function selectUser(id) {
    const promise = fetch('https://pictor-api.herokuapp.com/api/v1/users/${id}')
    .then(response => response.json())
    
    return {
            type: SELECT_USER,
            payload: promise
            }; 
} 

export function setUsers() {
    return fetch('https://pictor-api.herokuapp.com/api/v1/users')
    .then(response => response.json())
    .then((data) => {
    return {
    type: SET_USERS,
    payload: data
    };
    });
} 


