// import users from '../users';
export const SET_USERS = 'SET_USERS'; 

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
