import {
    ADD_POLL, REMOVE_POLL
} from "../actions/polls";

import {
    RECEIVE_DATA
} from "../actions/shared";


export default function polls(state = [], action) {
    switch(action.type) {
        case ADD_POLL:
            return state.concat([action.poll]);
        case REMOVE_POLL:
            return state.filter((poll) => poll.id  !== action.id);
        case RECEIVE_DATA:
            return action.polls;
        default:
            return state;



    }
}