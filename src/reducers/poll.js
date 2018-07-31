import {
    ADD_POLL,
    REMOVE_POLL,
    RECEIVE_POLLS,
} from "../actions/polls";

export default function polls(state = {}, action) {
    switch(action.type) {
        case ADD_POLL:
            return state.concat([action.poll]);
        case REMOVE_POLL:
            return state.filter((poll) => poll.id  !== action.id);
        case RECEIVE_POLLS:
            return {
                ...state, // spread current state
                ...action.polls, //spread polls added
            }
        default:
            return state;
    }
}