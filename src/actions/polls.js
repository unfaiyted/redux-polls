import {savePoll, savePollAnswer } from '../utils/api';

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

function handleAddPoll(poll, cb) {
    return (dispatch) => {
        return savePoll(poll).then((response) => {
            dispatch(addPoll(poll));
            cb();
        })
            .catch(() => console.error("Error adding Poll"))
    }

}

// TODO: create remove poll ability
function handleRemovePoll(poll) {
    return (dispatch) => {
        dispatch(removePoll(poll.id));
}
}