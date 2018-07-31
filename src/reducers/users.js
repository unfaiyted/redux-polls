import {
    ADD_USER,
    REMOVE_USER,
    RECEIVE_USERS
} from "../actions/users";

import {
    ADD_POLL
} from "../actions/polls";


export default function users(state = {}, action) {
    switch(action.type) {
        case ADD_USER:
            return state.concat([action.user]);
        case REMOVE_USER:
            return state.filter((user) => user.id !== action.id);
        case ADD_POLL:
            const poll = action.poll;
            const { author, id } = poll;
            return {
                ...state,
                [author]: {
                    ...state[author],
                    polls: state[author].polls.concat([id])
                }

            }
        case RECEIVE_USERS:
            return ({
                ...state,
                ...action.users,
            });
        default:
            return state;
    }

}