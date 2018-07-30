import { getInitialData } from '../utils/api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(users, polls) {
    return {
        type: RECEIVE_DATA,
        users,
        polls,
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, polls}) => {
            dispatch(receiveData(users, polls));
        })
    }
}