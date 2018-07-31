import {
    ADD_POLL,
    REMOVE_POLL,
    RECEIVE_POLLS,
} from "../actions/polls";
import {ADD_ANSWER} from "../actions/answers";

export default function polls(state = {}, action) {
    switch(action.type) {
        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll,
            }
        case REMOVE_POLL:
            return state.filter((poll) => poll.id  !== action.id);
        case RECEIVE_POLLS:
            return {
                ...state, // spread current state
                ...action.polls, //spread polls added
            }
        case ADD_ANSWER:
            const {answer, id, authedUser} = action;
            const poll = state[id];
            const votesKey = answer + 'Votes';

            return {
                // spread current state
                ...state,
                // get the action id we are adding the answer too and modify it
                [action.id]: {
                    ...poll, //spread poll data in poll
                    // gets the votes and adds the authed user to the list
                        [votesKey]: poll[votesKey].concat([authedUser])
                }
            }
        default:
            return state;
    }
}