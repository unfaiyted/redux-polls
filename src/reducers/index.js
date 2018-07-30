import { combineReducers} from 'redux'

import users from './users'
import polls from './poll'


export default combineReducers({
    users,
    polls
})