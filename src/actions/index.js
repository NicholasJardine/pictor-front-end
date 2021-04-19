import users from '../users';
export function setUsers() {
 // TODO: Api call! For now, simulate a DB
 return {
 type: 'SET_USERS',
 payload: users
 }
}