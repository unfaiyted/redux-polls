import { getInitialData } from '../utils/api';
import { receivePolls} from "./polls";
import { receiveUsers} from "./users";
import { setAuthUser } from "./authUser";


// HARD CODED LOGGED IN USER FOR TESTING
const AUTHED_ID = 'danemiller';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, polls}) => {
            dispatch(receiveUsers(users));
            dispatch(receivePolls(polls));
            dispatch(setAuthUser(AUTHED_ID));
        })
    }
}