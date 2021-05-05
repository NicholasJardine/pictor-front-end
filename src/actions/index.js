// import users from '../users';
export const SELECT_USER = 'SELECT_USER'; 
export const SET_USERS = 'SET_USERS'; 
export const USER_CREATED = 'POST_CREATED';
const ROOT_URL = 'http://pictor-official-api.herokuapp.com/api/v1/users'


export function createUser(body, callback) {
 const request = fetch("http://pictor-official-api.herokuapp.com/users", {
 method: 'POST',
 headers: { 'Content-Type': 'application/json;charset=UTF-8' },
 body: body
 }).then(response => response.json())
 .then(callback);
 return {
 type: USER_CREATED,
 payload: request
 };
} 

export function selectUser(id) {
    const promise = fetch(`http://pictor-official-api.herokuapp.com/api/v1/users/${id}`)
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


