import API from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';


function receiveData(polls, users) {
    return {
        type: RECEIVE_DATA,
        polls,
        users,
    }
}

export function handleIntialData() {
    return (dispatch) => {
        API.getInitalData()
    }
}