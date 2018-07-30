import API from '../utils/api';

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';


function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

function removeUser(id) {
    return {
        type: REMOVE_USER,
        id
    }
}

 export function handleAddUser(user, cb) {
    return (dispatch) => {
    }
 }

 export function handleDeleteUser(user) {

 }