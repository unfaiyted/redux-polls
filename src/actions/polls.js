import {savePoll, savePollAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';



export const ADD_POLL = 'ADD_POLL';
export const REMOVE_POLL = 'REMOVE_POLL';
export const RECEIVE_POLLS = 'RECEIVE_POLLS';


function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

function removePoll(id) {
    return {
        type: REMOVE_POLL,
        id
    }
}


export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls,
    }
    
}

export function handleAddPoll(poll, cb) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        dispatch(showLoading());
        return savePoll({
                ...poll,
                author: authedUser
            }).then((poll) => {
            dispatch(addPoll(poll));
            cb();
        }).then(() => dispatch(hideLoading()))
            .catch(() => console.error("Error adding Poll", dispatch(hideLoading())))
    }

}

// TODO: create remove poll ability
export function handleRemovePoll(poll) {
    return (dispatch) => {
        dispatch(removePoll(poll.id));
}
}