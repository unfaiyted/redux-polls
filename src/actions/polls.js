import API from '../utils/api';

export const ADD_POLL = 'ADD_POLL';
export const REMOVE_POLL = 'REMOVE_POLL';


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


function handleAddPoll(poll, cb) {
    return (dispatch) => {
        return API.savePoll(poll).then((response) => {
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