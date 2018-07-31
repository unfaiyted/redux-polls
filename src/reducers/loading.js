import {
    RECEIVE_POLLS
} from "../actions/polls";

// TODO: fix this since it could be inaccurate
export default function loading(state = true, action) {
    switch(action.type) {
        case RECEIVE_POLLS:
            return false;
        default:
            return state;
    }
}