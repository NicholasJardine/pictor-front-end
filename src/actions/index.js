// import users from '../users';
export function setUsers() {
    const promise = fetch('https://raw.githubusercontent.com/lewagon/flatsboilerplate/master/flats.json')
    .then(response => response.json());

    return {
    type: 'SET_USERS',
    payload: promise
    };
}

// export const FETCH_POSTS = 'FETCH_POSTS';
// export function fetchPosts() {
//  const promise = fetch(`${ROOT_URL}?key=${API_KEY}`)
//  .then(response => response.json());
//  return {
//  type: FETCH_POSTS,
//  payload: promise
//  };
// }